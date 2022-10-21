//
// Created by me on 10/20/22.
//

#ifndef SPRIG_NET_FINDLOOP_H
#define SPRIG_NET_FINDLOOP_H

struct findloopstate {
    int parent, child, sibling, component_root;
    bool visited;
    int index, minindex, maxindex;
    int minreachable, maxreachable;
    int bridge;
};

struct findloopstate* findloop_new_state(int nvertices);
void findloop_free_state(struct findloopstate* state);
bool findloop_is_loop_edge(struct findloopstate* pv, int u, int v);
static bool findloop_is_bridge_oneway(struct findloopstate* pv, int u, int v, int* u_vertices, int* v_vertices);
bool findloop_is_bridge(struct findloopstate* pv, int u, int v, int* u_vertices, int* v_vertices);
typedef int (*neighbour_fn_t)(int vertex, void *ctx);
bool findloop_run(struct findloopstate* pv, int nvertices, neighbour_fn_t neighbour, void* ctx);



#endif //SPRIG_NET_FINDLOOP_H
