#include "malloc.h"
#include "tree234.h"
#include "js_random.h"
#include <stddef.h>
#include "findloop.h"
#include "dsf.h"
#include "qsort.h"

/* Direction and other bitfields */
#define R 0x01
#define U 0x02
#define L 0x04
#define D 0x08
#define LOCKED 0x10
#define ACTIVE 0x20
#define RERR (R << 6)
#define UERR (U << 6)
#define LERR (L << 6)
#define DERR (D << 6)
#define ERR(dir) ((dir) << 6)

/* Rotations: Anticlockwise, Clockwise, Flip, general rotate */
#define A(x) ( (((x) & 0x07) << 1) | (((x) & 0x08) >> 3) )
#define C(x) ( (((x) & 0x0E) >> 1) | (((x) & 0x01) << 3) )
#define F(x) ( (((x) & 0x0C) >> 2) | (((x) & 0x03) << 2) )
#define ROT(x, n) ( ((n)&3) == 0 ? (x) : \
		    ((n)&3) == 1 ? A(x) : \
		    ((n)&3) == 2 ? F(x) : C(x) )

/* X and Y displacements */
#define X(x) ( (x) == R ? +1 : (x) == L ? -1 : 0 )
#define Y(x) ( (x) == D ? +1 : (x) == U ? -1 : 0 )

/* Bit count */
#define COUNT(x) ( (((x) & 0x08) >> 3) + (((x) & 0x04) >> 2) + \
		   (((x) & 0x02) >> 1) + ((x) & 0x01) )


#include "bool.h"

#define OFFSETWH(x2,y2,x1,y1,dir,width,height) \
    ( (x2) = ((x1) + width + X((dir))) % width, \
      (y2) = ((y1) + height + Y((dir))) % height)

#define OFFSET(x2,y2,x1,y1,dir,state) \
	OFFSETWH(x2,y2,x1,y1,dir,(state)->width,(state)->height)

#define index(state, a, x, y) ( a[(y) * (state)->width + (x)] )
#define tile(state, x, y)     index(state, (state)->tiles, x, y)
#define barrier(state, x, y)  index(state, (state)->imm->barriers, x, y)

#define assert(...)


typedef struct game_params game_params;

struct net_neighbour_ctx {
    int w, h;
    const unsigned char *tiles, *barriers;
    int i, n, neighbours[4];
};
static int net_neighbour(int vertex, void *vctx)
{
    struct net_neighbour_ctx *ctx = (struct net_neighbour_ctx *)vctx;

    if (vertex >= 0) {
        int x = vertex % ctx->w, y = vertex / ctx->w;
        int tile, dir, x1, y1, v1;

        ctx->i = ctx->n = 0;

        tile = ctx->tiles[vertex];
        if (ctx->barriers)
            tile &= ~ctx->barriers[vertex];

        for (dir = 1; dir < 0x10; dir <<= 1) {
            if (!(tile & dir))
                continue;
            OFFSETWH(x1, y1, x, y, dir, ctx->w, ctx->h);
            v1 = y1 * ctx->w + x1;
            if (ctx->tiles[v1] & F(dir))
                ctx->neighbours[ctx->n++] = v1;
        }
    }

    if (ctx->i < ctx->n)
        return ctx->neighbours[ctx->i++];
    else
        return -1;
}


static int *compute_loops_inner(int w, int h, bool wrapping,
                                const unsigned char *tiles,
                                const unsigned char *barriers)
{
    struct net_neighbour_ctx ctx;
    struct findloopstate *fls;
    int *loops;
    int x, y;

    fls = findloop_new_state(w*h);
    ctx.w = w;
    ctx.h = h;
    ctx.tiles = tiles;
    ctx.barriers = barriers;
    findloop_run(fls, w*h, net_neighbour, &ctx);

    loops = snewn(w*h, int);

    for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++) {
            int x1, y1, dir;
            int flags = 0;

            for (dir = 1; dir < 0x10; dir <<= 1) {
                if ((tiles[y*w+x] & dir) &&
                    !(barriers && (barriers[y*w+x] & dir))) {
                    OFFSETWH(x1, y1, x, y, dir, w, h);
                    if ((tiles[y1*w+x1] & F(dir)) &&
                        findloop_is_loop_edge(fls, y*w+x, y1*w+x1))
                        flags |= ERR(dir);
                }
            }
            loops[y*w+x] = flags;
        }
    }

    findloop_free_state(fls);
    return loops;
}


struct xyd {
    int x, y, direction;
};

static int xyd_cmp(const void *av, const void *bv) {
    const struct xyd *a = (const struct xyd *)av;
    const struct xyd *b = (const struct xyd *)bv;
    if (a->x < b->x)
        return -1;
    if (a->x > b->x)
        return +1;
    if (a->y < b->y)
        return -1;
    if (a->y > b->y)
        return +1;
    if (a->direction < b->direction)
        return -1;
    if (a->direction > b->direction)
        return +1;
    return 0;
}

static int xyd_cmp_nc(void *av, void *bv) { return xyd_cmp(av, bv); }

static struct xyd *new_xyd(int x, int y, int direction)
{
    struct xyd *xyd = snew(struct xyd);
    xyd->x = x;
    xyd->y = y;
    xyd->direction = direction;
    return xyd;
}


struct game_params {
    int width;
    int height;
    bool wrapping;
    bool unique;
    float barrier_probability;
};

game_params sprig_params = {
  .width = 7,
  .height = 7,
  .wrapping = false,
  .unique = true,
  .barrier_probability = 0.0
};

struct todo {
    bool *marked;
    int *buffer;
    int buflen;
    int head, tail;
};

static struct todo *todo_new(int maxsize)
{
    struct todo *todo = snew(struct todo);
    todo->marked = snewn(maxsize, bool);
    memset(todo->marked, 0, maxsize);
    todo->buflen = maxsize + 1;
    todo->buffer = snewn(todo->buflen, int);
    todo->head = todo->tail = 0;
    return todo;
}

static void todo_free(struct todo *todo)
{
    sfree(todo->marked);
    sfree(todo->buffer);
    sfree(todo);
}

static void todo_add(struct todo *todo, int index)
{
    if (todo->marked[index])
        return;			       /* already on the list */
    todo->marked[index] = true;
    todo->buffer[todo->tail++] = index;
    if (todo->tail == todo->buflen)
        todo->tail = 0;
}

static int todo_get(struct todo *todo) {
    int ret;

    if (todo->head == todo->tail)
        return -1;		       /* list is empty */
    ret = todo->buffer[todo->head++];
    if (todo->head == todo->buflen)
        todo->head = 0;
    todo->marked[ret] = false;

    return ret;
}


/*
 * Return values: -1 means puzzle was proved inconsistent, 0 means we
 * failed to narrow down to a unique solution, +1 means we solved it
 * fully.
 */
static int net_solver(int w, int h, unsigned char *tiles,
                      unsigned char *barriers, bool wrapping)
{
    unsigned char *tilestate;
    unsigned char *edgestate;
    int *deadends;
    int *equivalence;
    struct todo *todo;
    int i, j, x, y;
    int area;
    bool done_something;

    /*
     * Set up the solver's data structures.
     */

    /*
     * tilestate stores the possible orientations of each tile.
     * There are up to four of these, so we'll index the array in
     * fours. tilestate[(y * w + x) * 4] and its three successive
     * members give the possible orientations, clearing to 255 from
     * the end as things are ruled out.
     *
     * In this loop we also count up the area of the grid (which is
     * not _necessarily_ equal to w*h, because there might be one
     * or more blank squares present. This will never happen in a
     * grid generated _by_ this program, but it's worth keeping the
     * solver as general as possible.)
     */
    tilestate = snewn(w * h * 4, unsigned char);
    area = 0;
    for (i = 0; i < w*h; i++) {
        tilestate[i * 4] = tiles[i] & 0xF;
        for (j = 1; j < 4; j++) {
            if (tilestate[i * 4 + j - 1] == 255 ||
                A(tilestate[i * 4 + j - 1]) == tilestate[i * 4])
                tilestate[i * 4 + j] = 255;
            else
                tilestate[i * 4 + j] = A(tilestate[i * 4 + j - 1]);
        }
        if (tiles[i] != 0)
            area++;
    }

    /*
     * edgestate stores the known state of each edge. It is 0 for
     * unknown, 1 for open (connected) and 2 for closed (not
     * connected).
     *
     * In principle we need only worry about each edge once each,
     * but in fact it's easier to track each edge twice so that we
     * can reference it from either side conveniently. Also I'm
     * going to allocate _five_ bytes per tile, rather than the
     * obvious four, so that I can index edgestate[(y*w+x) * 5 + d]
     * where d is 1,2,4,8 and they never overlap.
     */
    edgestate = snewn((w * h - 1) * 5 + 9, unsigned char);
    memset(edgestate, 0, (w * h - 1) * 5 + 9);

    /*
     * deadends tracks which edges have dead ends on them. It is
     * indexed by tile and direction: deadends[(y*w+x) * 5 + d]
     * tells you whether heading out of tile (x,y) in direction d
     * can reach a limited amount of the grid. Values are area+1
     * (no dead end known) or less than that (can reach _at most_
     * this many other tiles by heading this way out of this tile).
     */
    deadends = snewn((w * h - 1) * 5 + 9, int);
    for (i = 0; i < (w * h - 1) * 5 + 9; i++)
        deadends[i] = area+1;

    /*
     * equivalence tracks which sets of tiles are known to be
     * connected to one another, so we can avoid creating loops by
     * linking together tiles which are already linked through
     * another route.
     *
     * This is a disjoint set forest structure: equivalence[i]
     * contains the index of another member of the equivalence
     * class containing i, or contains i itself for precisely one
     * member in each such class. To find a representative member
     * of the equivalence class containing i, you keep replacing i
     * with equivalence[i] until it stops changing; then you go
     * _back_ along the same path and point everything on it
     * directly at the representative member so as to speed up
     * future searches. Then you test equivalence between tiles by
     * finding the representative of each tile and seeing if
     * they're the same; and you create new equivalence (merge
     * classes) by finding the representative of each tile and
     * setting equivalence[one]=the_other.
     */
    equivalence = snew_dsf(w * h);

    /*
     * On a non-wrapping grid, we instantly know that all the edges
     * round the edge are closed.
     */
    if (!wrapping) {
        for (i = 0; i < w; i++) {
            edgestate[i * 5 + 2] = edgestate[((h-1) * w + i) * 5 + 8] = 2;
        }
        for (i = 0; i < h; i++) {
            edgestate[(i * w + w-1) * 5 + 1] = edgestate[(i * w) * 5 + 4] = 2;
        }
    }

    /*
     * If we have barriers available, we can mark those edges as
     * closed too.
     */
    if (barriers) {
        for (y = 0; y < h; y++) for (x = 0; x < w; x++) {
                int d;
                for (d = 1; d <= 8; d += d) {
                    if (barriers[y*w+x] & d) {
                        int x2, y2;
                        /*
                         * In principle the barrier list should already
                         * contain each barrier from each side, but
                         * let's not take chances with our internal
                         * consistency.
                         */
                        OFFSETWH(x2, y2, x, y, d, w, h);
                        edgestate[(y*w+x) * 5 + d] = 2;
                        edgestate[(y2*w+x2) * 5 + F(d)] = 2;
                    }
                }
            }
    }

    /*
     * Since most deductions made by this solver are local (the
     * exception is loop avoidance, where joining two tiles
     * together on one side of the grid can theoretically permit a
     * fresh deduction on the other), we can address the scaling
     * problem inherent in iterating repeatedly over the entire
     * grid by instead working with a to-do list.
     */
    todo = todo_new(w * h);

    /*
     * Main deductive loop.
     */
    done_something = true;	       /* prevent instant termination! */
    while (1) {
        int index;

        /*
         * Take a tile index off the todo list and process it.
         */
        index = todo_get(todo);
        if (index == -1) {
            /*
             * If we have run out of immediate things to do, we
             * have no choice but to scan the whole grid for
             * longer-range things we've missed. Hence, I now add
             * every square on the grid back on to the to-do list.
             * I also set `done_something' to false at this point;
             * if we later come back here and find it still false,
             * we will know we've scanned the entire grid without
             * finding anything new to do, and we can terminate.
             */
            if (!done_something)
                break;
            for (i = 0; i < w*h; i++)
                todo_add(todo, i);
            done_something = false;

            index = todo_get(todo);
        }

        y = index / w;
        x = index % w;
        {
            int d, ourclass = dsf_canonify(equivalence, y*w+x);
            int deadendmax[9];

            deadendmax[1] = deadendmax[2] = deadendmax[4] = deadendmax[8] = 0;

            for (i = j = 0; i < 4 && tilestate[(y*w+x) * 4 + i] != 255; i++) {
                bool valid;
                int nnondeadends, nondeadends[4], deadendtotal;
                int nequiv, equiv[5];
                int val = tilestate[(y*w+x) * 4 + i];

                valid = true;
                nnondeadends = deadendtotal = 0;
                equiv[0] = ourclass;
                nequiv = 1;
                for (d = 1; d <= 8; d += d) {
                    /*
                     * Immediately rule out this orientation if it
                     * conflicts with any known edge.
                     */
                    if ((edgestate[(y*w+x) * 5 + d] == 1 && !(val & d)) ||
                        (edgestate[(y*w+x) * 5 + d] == 2 && (val & d)))
                        valid = false;

                    if (val & d) {
                        /*
                         * Count up the dead-end statistics.
                         */
                        if (deadends[(y*w+x) * 5 + d] <= area) {
                            deadendtotal += deadends[(y*w+x) * 5 + d];
                        } else {
                            nondeadends[nnondeadends++] = d;
                        }

                        /*
                         * Ensure we aren't linking to any tiles,
                         * through edges not already known to be
                         * open, which create a loop.
                         */
                        if (edgestate[(y*w+x) * 5 + d] == 0) {
                            int c, k, x2, y2;

                            OFFSETWH(x2, y2, x, y, d, w, h);
                            c = dsf_canonify(equivalence, y2*w+x2);
                            for (k = 0; k < nequiv; k++)
                                if (c == equiv[k])
                                    break;
                            if (k == nequiv)
                                equiv[nequiv++] = c;
                            else
                                valid = false;
                        }
                    }
                }

                if (nnondeadends == 0) {
                    /*
                     * If this orientation links together dead-ends
                     * with a total area of less than the entire
                     * grid, it is invalid.
                     *
                     * (We add 1 to deadendtotal because of the
                     * tile itself, of course; one tile linking
                     * dead ends of size 2 and 3 forms a subnetwork
                     * with a total area of 6, not 5.)
                     */
                    if (deadendtotal > 0 && deadendtotal+1 < area)
                        valid = false;
                } else if (nnondeadends == 1) {
                    /*
                     * If this orientation links together one or
                     * more dead-ends with precisely one
                     * non-dead-end, then we may have to mark that
                     * non-dead-end as a dead end going the other
                     * way. However, it depends on whether all
                     * other orientations share the same property.
                     */
                    deadendtotal++;
                    if (deadendmax[nondeadends[0]] < deadendtotal)
                        deadendmax[nondeadends[0]] = deadendtotal;
                } else {
                    /*
                     * If this orientation links together two or
                     * more non-dead-ends, then we can rule out the
                     * possibility of putting in new dead-end
                     * markings in those directions.
                     */
                    int k;
                    for (k = 0; k < nnondeadends; k++)
                        deadendmax[nondeadends[k]] = area+1;
                }

                if (valid)
                    tilestate[(y*w+x) * 4 + j++] = val;
#ifdef SOLVER_DIAGNOSTICS
                else
		    printf("ruling out orientation %x at %d,%d\n", val, x, y);
#endif
            }

            if (j == 0) {
                /* If we've ruled out all possible orientations for a
                 * tile, then our puzzle has no solution at all. */
                return -1;
            }

            if (j < i) {
                done_something = true;

                /*
                 * We have ruled out at least one tile orientation.
                 * Make sure the rest are blanked.
                 */
                while (j < 4)
                    tilestate[(y*w+x) * 4 + j++] = 255;
            }

            /*
             * Now go through the tile orientations again and see
             * if we've deduced anything new about any edges.
             */
            {
                int a, o;
                a = 0xF; o = 0;

                for (i = 0; i < 4 && tilestate[(y*w+x) * 4 + i] != 255; i++) {
                    a &= tilestate[(y*w+x) * 4 + i];
                    o |= tilestate[(y*w+x) * 4 + i];
                }
                for (d = 1; d <= 8; d += d)
                    if (edgestate[(y*w+x) * 5 + d] == 0) {
                        int x2, y2, d2;
                        OFFSETWH(x2, y2, x, y, d, w, h);
                        d2 = F(d);
                        if (a & d) {
                            /* This edge is open in all orientations. */
#ifdef SOLVER_DIAGNOSTICS
                            printf("marking edge %d,%d:%d open\n", x, y, d);
#endif
                            edgestate[(y*w+x) * 5 + d] = 1;
                            edgestate[(y2*w+x2) * 5 + d2] = 1;
                            dsf_merge(equivalence, y*w+x, y2*w+x2);
                            done_something = true;
                            todo_add(todo, y2*w+x2);
                        } else if (!(o & d)) {
                            /* This edge is closed in all orientations. */
#ifdef SOLVER_DIAGNOSTICS
                            printf("marking edge %d,%d:%d closed\n", x, y, d);
#endif
                            edgestate[(y*w+x) * 5 + d] = 2;
                            edgestate[(y2*w+x2) * 5 + d2] = 2;
                            done_something = true;
                            todo_add(todo, y2*w+x2);
                        }
                    }

            }

            /*
             * Now check the dead-end markers and see if any of
             * them has lowered from the real ones.
             */
            for (d = 1; d <= 8; d += d) {
                int x2, y2, d2;
                OFFSETWH(x2, y2, x, y, d, w, h);
                d2 = F(d);
                if (deadendmax[d] > 0 &&
                    deadends[(y2*w+x2) * 5 + d2] > deadendmax[d]) {
#ifdef SOLVER_DIAGNOSTICS
                    printf("setting dead end value %d,%d:%d to %d\n",
			   x2, y2, d2, deadendmax[d]);
#endif
                    deadends[(y2*w+x2) * 5 + d2] = deadendmax[d];
                    done_something = true;
                    todo_add(todo, y2*w+x2);
                }
            }

        }
    }

    /*
     * Mark all completely determined tiles as locked.
     */
    j = +1;
    for (i = 0; i < w*h; i++) {
        if (tilestate[i * 4 + 1] == 255) {
            assert(tilestate[i * 4 + 0] != 255);
            tiles[i] = tilestate[i * 4] | LOCKED;
        } else {
            tiles[i] &= ~LOCKED;
            j = 0;
        }
    }

    /*
     * Free up working space.
     */
    todo_free(todo);
    sfree(tilestate);
    sfree(edgestate);
    sfree(deadends);
    sfree(equivalence);

    return j;
}

/* ----------------------------------------------------------------------
 * Randomly select a new game description.
 */

//int abs(int a) {
//    return (a<0)?-a:a;
//}

#define min(a,b) ((a<b)?(a):(b))
#define abs(a) ((a<0) ? -(a) : (a))

static void memswap(void *av, void *bv, int size)
{
    char tmpbuf[512];
    char *a = av, *b = bv;

    while (size > 0) {
        int thislen = min(size, sizeof(tmpbuf));
        memcpy(tmpbuf, a, thislen);
        memcpy(a, b, thislen);
        memcpy(b, tmpbuf, thislen);
        a += thislen;
        b += thislen;
        size -= thislen;
    }
}

void shuffle(void *array, int nelts, int eltsize)
{
    char *carray = (char *)array;
    int i;

    for (i = nelts; i-- > 1 ;) {
        int j = random_upto(i+1);
        if (j != i)
            memswap(carray + eltsize * i, carray + eltsize * j, eltsize);
    }
}

/*
 * Function to randomly perturb an ambiguous section in a grid, to
 * attempt to ensure unique solvability.
 */
static void perturb(int w, int h, unsigned char *tiles, bool wrapping, int startx, int starty, int startd)
{
    struct xyd *perimeter, *perim2, *loop[2], looppos[2];
    int nperim, perimsize, nloop[2], loopsize[2];
    int x, y, d, i;

    /*
     * We know that the tile at (startx,starty) is part of an
     * ambiguous section, and we also know that its neighbour in
     * direction startd is fully specified. We begin by tracing all
     * the way round the ambiguous area.
     */
    nperim = perimsize = 0;
    perimeter = NULL;
    x = startx;
    y = starty;
    d = startd;
#ifdef PERTURB_DIAGNOSTICS
    printf("perturb %d,%d:%d\n", x, y, d);
#endif
    do {
        int x2, y2, d2;

        if (nperim >= perimsize) {
            perimsize = perimsize * 3 / 2 + 32;
            perimeter = sresize(perimeter, perimsize, struct xyd);
        }
        perimeter[nperim].x = x;
        perimeter[nperim].y = y;
        perimeter[nperim].direction = d;
        nperim++;
#ifdef PERTURB_DIAGNOSTICS
        printf("perimeter: %d,%d:%d\n", x, y, d);
#endif

        /*
         * First, see if we can simply turn left from where we are
         * and find another locked square.
         */
        d2 = A(d);
        OFFSETWH(x2, y2, x, y, d2, w, h);
        if ((!wrapping && (abs(x2-x) > 1 || abs(y2-y) > 1)) ||
            (tiles[y2*w+x2] & LOCKED)) {
            d = d2;
        } else {
            /*
             * Failing that, step left into the new square and look
             * in front of us.
             */
            x = x2;
            y = y2;
            OFFSETWH(x2, y2, x, y, d, w, h);
            if ((wrapping || (abs(x2-x) <= 1 && abs(y2-y) <= 1)) &&
                !(tiles[y2*w+x2] & LOCKED)) {
                /*
                 * And failing _that_, we're going to have to step
                 * forward into _that_ square and look right at the
                 * same locked square as we started with.
                 */
                x = x2;
                y = y2;
                d = C(d);
            }
        }

    } while (x != startx || y != starty || d != startd);

    /*
     * Our technique for perturbing this ambiguous area is to
     * search round its edge for a join we can make: that is, an
     * edge on the perimeter which is (a) not currently connected,
     * and (b) connecting it would not yield a full cross on either
     * side. Then we make that join, search round the network to
     * find the loop thus constructed, and sever the loop at a
     * randomly selected other point.
     */
    perim2 = snewn(nperim, struct xyd);
    memcpy(perim2, perimeter, nperim * sizeof(struct xyd));
    /* Shuffle the perimeter, so as to search it without directional bias. */
    shuffle(perim2, nperim, sizeof(*perim2));
    for (i = 0; i < nperim; i++) {
        int x2, y2;

        x = perim2[i].x;
        y = perim2[i].y;
        d = perim2[i].direction;

        OFFSETWH(x2, y2, x, y, d, w, h);
        if (!wrapping && (abs(x2-x) > 1 || abs(y2-y) > 1))
            continue;            /* can't link across non-wrapping border */
        if (tiles[y*w+x] & d)
            continue;		       /* already linked in this direction! */
        if (((tiles[y*w+x] | d) & 15) == 15)
            continue;		       /* can't turn this tile into a cross */
        if (((tiles[y2*w+x2] | F(d)) & 15) == 15)
            continue;		       /* can't turn other tile into a cross */

        /*
         * We've found the point at which we're going to make a new
         * link.
         */
#ifdef PERTURB_DIAGNOSTICS
        printf("linking %d,%d:%d\n", x, y, d);
#endif
        tiles[y*w+x] |= d;
        tiles[y2*w+x2] |= F(d);

        break;
    }
    sfree(perim2);

    if (i == nperim) {
        sfree(perimeter);
        return;			       /* nothing we can do! */
    }

    /*
     * Now we've constructed a new link, we need to find the entire
     * loop of which it is a part.
     *
     * In principle, this involves doing a complete search round
     * the network. However, I anticipate that in the vast majority
     * of cases the loop will be quite small, so what I'm going to
     * do is make _two_ searches round the network in parallel, one
     * keeping its metaphorical hand on the left-hand wall while
     * the other keeps its hand on the right. As soon as one of
     * them gets back to its starting point, I abandon the other.
     */
    for (i = 0; i < 2; i++) {
        loopsize[i] = nloop[i] = 0;
        loop[i] = NULL;
        looppos[i].x = x;
        looppos[i].y = y;
        looppos[i].direction = d;
    }
    while (1) {
        for (i = 0; i < 2; i++) {
            int x2, y2, j;

            x = looppos[i].x;
            y = looppos[i].y;
            d = looppos[i].direction;

            OFFSETWH(x2, y2, x, y, d, w, h);

            /*
             * Add this path segment to the loop, unless it exactly
             * reverses the previous one on the loop in which case
             * we take it away again.
             */
#ifdef PERTURB_DIAGNOSTICS
            printf("looppos[%d] = %d,%d:%d\n", i, x, y, d);
#endif
            if (nloop[i] > 0 &&
                loop[i][nloop[i]-1].x == x2 &&
                loop[i][nloop[i]-1].y == y2 &&
                loop[i][nloop[i]-1].direction == F(d)) {
#ifdef PERTURB_DIAGNOSTICS
                printf("removing path segment %d,%d:%d from loop[%d]\n",
		       x2, y2, F(d), i);
#endif
                nloop[i]--;
            } else {
                if (nloop[i] >= loopsize[i]) {
                    loopsize[i] = loopsize[i] * 3 / 2 + 32;
                    loop[i] = sresize(loop[i], loopsize[i], struct xyd);
                }
#ifdef PERTURB_DIAGNOSTICS
                printf("adding path segment %d,%d:%d to loop[%d]\n",
		       x, y, d, i);
#endif
                loop[i][nloop[i]++] = looppos[i];
            }

#ifdef PERTURB_DIAGNOSTICS
            printf("tile at new location is %x\n", tiles[y2*w+x2] & 0xF);
#endif
            d = F(d);
            for (j = 0; j < 4; j++) {
                if (i == 0)
                    d = A(d);
                else
                    d = C(d);
#ifdef PERTURB_DIAGNOSTICS
                printf("trying dir %d\n", d);
#endif
                if (tiles[y2*w+x2] & d) {
                    looppos[i].x = x2;
                    looppos[i].y = y2;
                    looppos[i].direction = d;
                    break;
                }
            }

            assert(j < 4);
            assert(nloop[i] > 0);

            if (looppos[i].x == loop[i][0].x &&
                looppos[i].y == loop[i][0].y &&
                looppos[i].direction == loop[i][0].direction) {
#ifdef PERTURB_DIAGNOSTICS
                printf("loop %d finished tracking\n", i);
#endif

                /*
                 * Having found our loop, we now sever it at a
                 * randomly chosen point - absolutely any will do -
                 * which is not the one we joined it at to begin
                 * with. Conveniently, the one we joined it at is
                 * loop[i][0], so we just avoid that one.
                 */
                j = random_upto(nloop[i]-1) + 1;
                x = loop[i][j].x;
                y = loop[i][j].y;
                d = loop[i][j].direction;
                OFFSETWH(x2, y2, x, y, d, w, h);
                tiles[y*w+x] &= ~d;
                tiles[y2*w+x2] &= ~F(d);

                break;
            }
        }
        if (i < 2)
            break;
    }
    sfree(loop[0]);
    sfree(loop[1]);

    /*
     * Finally, we must mark the entire disputed section as locked,
     * to prevent the perturb function being called on it multiple
     * times.
     *
     * To do this, we _sort_ the perimeter of the area. The
     * existing xyd_cmp function will arrange things into columns
     * for us, in such a way that each column has the edges in
     * vertical order. Then we can work down each column and fill
     * in all the squares between an up edge and a down edge.
     */
    qsort(perimeter, nperim, sizeof(struct xyd), xyd_cmp, NULL);
    x = y = -1;
    for (i = 0; i <= nperim; i++) {
        if (i == nperim || perimeter[i].x > x) {
            /*
             * Fill in everything from the last Up edge to the
             * bottom of the grid, if necessary.
             */
            if (x != -1) {
                while (y < h) {
#ifdef PERTURB_DIAGNOSTICS
                    printf("resolved: locking tile %d,%d\n", x, y);
#endif
                    tiles[y * w + x] |= LOCKED;
                    y++;
                }
                x = y = -1;
            }

            if (i == nperim)
                break;

            x = perimeter[i].x;
            y = 0;
        }

        if (perimeter[i].direction == U) {
            x = perimeter[i].x;
            y = perimeter[i].y;
        } else if (perimeter[i].direction == D) {
            /*
             * Fill in everything from the last Up edge to here.
             */
            assert(x == perimeter[i].x && y <= perimeter[i].y);
            while (y <= perimeter[i].y) {
#ifdef PERTURB_DIAGNOSTICS
                printf("resolved: locking tile %d,%d\n", x, y);
#endif
                tiles[y * w + x] |= LOCKED;
                y++;
            }
            x = y = -1;
        }
    }

    sfree(perimeter);
}


char *new_game_desc(char **aux)
{
    game_params* params = &sprig_params;
    tree234 *possibilities, *barriertree;
    int w, h, x, y, cx, cy, nbarriers;
    unsigned char *tiles, *barriers;
    char *desc, *p;

    w = params->width;
    h = params->height;

    cx = w / 2;
    cy = h / 2;

    tiles = snewn(w * h, unsigned char);
    barriers = snewn(w * h, unsigned char);

    begin_generation:

    memset(tiles, 0, w * h);
    memset(barriers, 0, w * h);

    /*
     * Construct the unshuffled grid.
     * 
     * To do this, we simply start at the centre point, repeatedly
     * choose a random possibility out of the available ways to
     * extend a used square into an unused one, and do it. After
     * extending the third line out of a square, we remove the
     * fourth from the possibilities list to avoid any full-cross
     * squares (which would make the game too easy because they
     * only have one orientation).
     * 
     * The slightly worrying thing is the avoidance of full-cross
     * squares. Can this cause our unsophisticated construction
     * algorithm to paint itself into a corner, by getting into a
     * situation where there are some unreached squares and the
     * only way to reach any of them is to extend a T-piece into a
     * full cross?
     * 
     * Answer: no it can't, and here's a proof.
     * 
     * Any contiguous group of such unreachable squares must be
     * surrounded on _all_ sides by T-pieces pointing away from the
     * group. (If not, then there is a square which can be extended
     * into one of the `unreachable' ones, and so it wasn't
     * unreachable after all.) In particular, this implies that
     * each contiguous group of unreachable squares must be
     * rectangular in shape (any deviation from that yields a
     * non-T-piece next to an `unreachable' square).
     * 
     * So we have a rectangle of unreachable squares, with T-pieces
     * forming a solid border around the rectangle. The corners of
     * that border must be connected (since every tile connects all
     * the lines arriving in it), and therefore the border must
     * form a closed loop around the rectangle.
     * 
     * But this can't have happened in the first place, since we
     * _know_ we've avoided creating closed loops! Hence, no such
     * situation can ever arise, and the naive grid construction
     * algorithm will guaranteeably result in a complete grid
     * containing no unreached squares, no full crosses _and_ no
     * closed loops. []
     */
    possibilities = newtree234(xyd_cmp_nc);

    if (cx+1 < w)
	add234(possibilities, new_xyd(cx, cy, R));
    if (cy-1 >= 0)
	add234(possibilities, new_xyd(cx, cy, U));
    if (cx-1 >= 0)
	add234(possibilities, new_xyd(cx, cy, L));
    if (cy+1 < h)
	add234(possibilities, new_xyd(cx, cy, D));

    while (count234(possibilities) > 0) {
	int i;
	struct xyd *xyd;
	int x1, y1, d1, x2, y2, d2, d;

	/*
	 * Extract a randomly chosen possibility from the list.
	 */
	i = random_upto(count234(possibilities));
	xyd = delpos234(possibilities, i);
	x1 = xyd->x;
	y1 = xyd->y;
	d1 = xyd->direction;
	sfree(xyd);

	OFFSET(x2, y2, x1, y1, d1, params);
	d2 = F(d1);
#ifdef GENERATION_DIAGNOSTICS
	printf("picked (%d,%d,%c) <-> (%d,%d,%c)\n",
	       x1, y1, "0RU3L567D9abcdef"[d1], x2, y2, "0RU3L567D9abcdef"[d2]);
#endif

	/*
	 * Make the connection. (We should be moving to an as yet
	 * unused tile.)
	 */
	index(params, tiles, x1, y1) |= d1;
	assert(index(params, tiles, x2, y2) == 0);
	index(params, tiles, x2, y2) |= d2;

	/*
	 * If we have created a T-piece, remove its last
	 * possibility.
	 */
	if (COUNT(index(params, tiles, x1, y1)) == 3) {
	    struct xyd xyd1, *xydp;

	    xyd1.x = x1;
	    xyd1.y = y1;
	    xyd1.direction = 0x0F ^ index(params, tiles, x1, y1);

	    xydp = find234(possibilities, &xyd1, NULL);

	    if (xydp) {
#ifdef GENERATION_DIAGNOSTICS
		printf("T-piece; removing (%d,%d,%c)\n",
		       xydp->x, xydp->y, "0RU3L567D9abcdef"[xydp->direction]);
#endif
		del234(possibilities, xydp);
		sfree(xydp);
	    }
	}

	/*
	 * Remove all other possibilities that were pointing at the
	 * tile we've just moved into.
	 */
	for (d = 1; d < 0x10; d <<= 1) {
	    int x3, y3, d3;
	    struct xyd xyd1, *xydp;

	    OFFSET(x3, y3, x2, y2, d, params);
	    d3 = F(d);

	    xyd1.x = x3;
	    xyd1.y = y3;
	    xyd1.direction = d3;

	    xydp = find234(possibilities, &xyd1, NULL);

	    if (xydp) {
#ifdef GENERATION_DIAGNOSTICS
		printf("Loop avoidance; removing (%d,%d,%c)\n",
		       xydp->x, xydp->y, "0RU3L567D9abcdef"[xydp->direction]);
#endif
		del234(possibilities, xydp);
		sfree(xydp);
	    }
	}

	/*
	 * Add new possibilities to the list for moving _out_ of
	 * the tile we have just moved into.
	 */
	for (d = 1; d < 0x10; d <<= 1) {
	    int x3, y3;

	    if (d == d2)
		continue;	       /* we've got this one already */

	    if (!params->wrapping) {
		if (d == U && y2 == 0)
		    continue;
		if (d == D && y2 == h-1)
		    continue;
		if (d == L && x2 == 0)
		    continue;
		if (d == R && x2 == w-1)
		    continue;
	    }

	    OFFSET(x3, y3, x2, y2, d, params);

	    if (index(params, tiles, x3, y3))
		continue;	       /* this would create a loop */

#ifdef GENERATION_DIAGNOSTICS
	    printf("New frontier; adding (%d,%d,%c)\n",
		   x2, y2, "0RU3L567D9abcdef"[d]);
#endif
	    add234(possibilities, new_xyd(x2, y2, d));
	}
    }
    /* Having done that, we should have no possibilities remaining. */
    assert(count234(possibilities) == 0);
    freetree234(possibilities);

    if (params->unique) {
	int prevn = -1;

	/*
	 * Run the solver to check unique solubility.
	 */
	while (net_solver(w, h, tiles, NULL, params->wrapping) != 1) {
	    int n = 0;

	    /*
	     * We expect (in most cases) that most of the grid will
	     * be uniquely specified already, and the remaining
	     * ambiguous sections will be small and separate. So
	     * our strategy is to find each individual such
	     * section, and perform a perturbation on the network
	     * in that area.
	     */
	    for (y = 0; y < h; y++) for (x = 0; x < w; x++) {
		if (x+1 < w && ((tiles[y*w+x] ^ tiles[y*w+x+1]) & LOCKED)) {
		    n++;
		    if (tiles[y*w+x] & LOCKED)
			perturb(w, h, tiles, params->wrapping, x+1, y, L);
		    else
			perturb(w, h, tiles, params->wrapping, x, y, R);
		}
		if (y+1 < h && ((tiles[y*w+x] ^ tiles[(y+1)*w+x]) & LOCKED)) {
		    n++;
		    if (tiles[y*w+x] & LOCKED)
			perturb(w, h, tiles, params->wrapping, x, y+1, U);
		    else
			perturb(w, h, tiles, params->wrapping, x, y, D);
		}
	    }

	    /*
	     * Now n counts the number of ambiguous sections we
	     * have fiddled with. If we haven't managed to decrease
	     * it from the last time we ran the solver, give up and
	     * regenerate the entire grid.
	     */
	    if (prevn != -1 && prevn <= n)
		goto begin_generation; /* (sorry) */

	    prevn = n;
	}

	/*
	 * The solver will have left a lot of LOCKED bits lying
	 * around in the tiles array. Remove them.
	 */
	for (x = 0; x < w*h; x++)
	    tiles[x] &= ~LOCKED;
    }

    /*
     * Now compute a list of the possible barrier locations.
     */
    barriertree = newtree234(xyd_cmp_nc);
    for (y = 0; y < h; y++) {
	for (x = 0; x < w; x++) {

	    if (!(index(params, tiles, x, y) & R) &&
                (params->wrapping || x < w-1))
		add234(barriertree, new_xyd(x, y, R));
	    if (!(index(params, tiles, x, y) & D) &&
                (params->wrapping || y < h-1))
		add234(barriertree, new_xyd(x, y, D));
	}
    }

    /*
     * Save the unshuffled grid in aux.
     */
    {
	char *solution;
        int i;

	solution = snewn(w * h + 1, char);
        for (i = 0; i < w * h; i++)
            solution[i] = "0123456789abcdef"[tiles[i] & 0xF];
        solution[w*h] = '\0';

	*aux = solution;
    }

    /*
     * Now shuffle the grid.
     * 
     * In order to avoid accidentally generating an already-solved
     * grid, we will reshuffle as necessary to ensure that at least
     * one edge has a mismatched connection.
     *
     * This can always be done, since validate_params() enforces a
     * grid area of at least 2 and our generator never creates
     * either type of rotationally invariant tile (cross and
     * blank). Hence there must be at least one edge separating
     * distinct tiles, and it must be possible to find orientations
     * of those tiles such that one tile is trying to connect
     * through that edge and the other is not.
     * 
     * (We could be more subtle, and allow the shuffle to generate
     * a grid in which all tiles match up locally and the only
     * criterion preventing the grid from being already solved is
     * connectedness. However, that would take more effort, and
     * it's easier to simply make sure every grid is _obviously_
     * not solved.)
     *
     * We also require that our shuffle produces no loops in the
     * initial grid state, because it's a bit rude to light up a 'HEY,
     * YOU DID SOMETHING WRONG!' indicator when the user hasn't even
     * had a chance to do _anything_ yet. This also is possible just
     * by retrying the whole shuffle on failure, because it's clear
     * that at least one non-solved shuffle with no loops must exist.
     * (Proof: take the _solved_ state of the puzzle, and rotate one
     * endpoint.)
     */
    while (1) {
        int mismatches, prev_loopsquares, this_loopsquares, i;
        int *loops;

      shuffle:
        for (y = 0; y < h; y++) {
            for (x = 0; x < w; x++) {
                int orig = index(params, tiles, x, y);
                int rot = random_upto(4);
                index(params, tiles, x, y) = ROT(orig, rot);
            }
        }

        /*
         * Check for loops, and try to fix them by reshuffling just
         * the squares involved.
         */
        prev_loopsquares = w*h+1;
        while (1) {
            loops = compute_loops_inner(w, h, params->wrapping, tiles, NULL);
            this_loopsquares = 0;
            for (i = 0; i < w*h; i++) {
                if (loops[i]) {
                    int orig = tiles[i];
                    int rot = random_upto(4);
                    tiles[i] = ROT(orig, rot);
                    this_loopsquares++;
                }
            }
            sfree(loops);
            if (this_loopsquares > prev_loopsquares) {
                /*
                 * We're increasing rather than reducing the number of
                 * loops. Give up and go back to the full shuffle.
                 */
                goto shuffle;
            }
            if (this_loopsquares == 0)
                break;
            prev_loopsquares = this_loopsquares;
        }

        mismatches = 0;
        /*
         * I can't even be bothered to check for mismatches across
         * a wrapping edge, so I'm just going to enforce that there
         * must be a mismatch across a non-wrapping edge, which is
         * still always possible.
         */
        for (y = 0; y < h; y++) for (x = 0; x < w; x++) {
            if (x+1 < w && ((ROT(index(params, tiles, x, y), 2) ^ 
                             index(params, tiles, x+1, y)) & L))
                mismatches++;
            if (y+1 < h && ((ROT(index(params, tiles, x, y), 2) ^ 
                             index(params, tiles, x, y+1)) & U))
                mismatches++;
        }

        if (mismatches == 0)
            continue;

        /* OK. */
        break;
    }

    /*
     * And now choose barrier locations. (We carefully do this
     * _after_ shuffling, so that changing the barrier rate in the
     * params while keeping the random seed the same will give the
     * same shuffled grid and _only_ change the barrier locations.
     * Also the way we choose barrier locations, by repeatedly
     * choosing one possibility from the list until we have enough,
     * is designed to ensure that raising the barrier rate while
     * keeping the seed the same will provide a superset of the
     * previous barrier set - i.e. if you ask for 10 barriers, and
     * then decide that's still too hard and ask for 20, you'll get
     * the original 10 plus 10 more, rather than getting 20 new
     * ones and the chance of remembering your first 10.)
     */
    nbarriers = (int)(params->barrier_probability * count234(barriertree));
    assert(nbarriers >= 0 && nbarriers <= count234(barriertree));

    while (nbarriers > 0) {
	int i;
	struct xyd *xyd;
	int x1, y1, d1, x2, y2, d2;

	/*
	 * Extract a randomly chosen barrier from the list.
	 */
	i = random_upto(count234(barriertree));
	xyd = delpos234(barriertree, i);

	assert(xyd != NULL);

	x1 = xyd->x;
	y1 = xyd->y;
	d1 = xyd->direction;
	sfree(xyd);

	OFFSET(x2, y2, x1, y1, d1, params);
	d2 = F(d1);

	index(params, barriers, x1, y1) |= d1;
	index(params, barriers, x2, y2) |= d2;

	nbarriers--;
    }

    /*
     * Clean up the rest of the barrier list.
     */
    {
	struct xyd *xyd;

	while ( (xyd = delpos234(barriertree, 0)) != NULL)
	    sfree(xyd);

	freetree234(barriertree);
    }

    /*
     * Finally, encode the grid into a string game description.
     * 
     * My syntax is extremely simple: each square is encoded as a
     * hex digit in which bit 0 means a connection on the right,
     * bit 1 means up, bit 2 left and bit 3 down. (i.e. the same
     * encoding as used internally). Each digit is followed by
     * optional barrier indicators: `v' means a vertical barrier to
     * the right of it, and `h' means a horizontal barrier below
     * it.
     */
    desc = snewn(w * h * 3 + 1, char);
    p = desc;
    for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++) {
            *p++ = "0123456789abcdef"[index(params, tiles, x, y)];
            if ((params->wrapping || x < w-1) &&
                (index(params, barriers, x, y) & R))
                *p++ = 'v';
            if ((params->wrapping || y < h-1) &&
                (index(params, barriers, x, y) & D))
                *p++ = 'h';
        }
    }
    assert(p - desc <= w*h*3);
    *p = '\0';

    sfree(tiles);
    sfree(barriers);

    return desc;
}

