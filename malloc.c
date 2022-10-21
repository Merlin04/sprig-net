#include <stdint.h>
#include "malloc.h"
#include "real_malloc.h"

/*
 * malloc.c: safe wrappers around malloc, realloc, free, strdup
 */

void* realloc(void* ptr, uint64_t size);

/*
 * smalloc should guarantee to return a useful pointer - we
 * can do nothing except die when it's out of memory anyway.
 */
#undef smalloc
void *smalloc(size_t size) {
    void *p;
#ifdef PTRDIFF_MAX
    //if (size > PTRDIFF_MAX)
    //    fatal("allocation too large");
#endif
    p = malloc(size);
    //if (!p)
    //    fatal("out of memory");
    return p;
}

/*
 * sfree should guaranteeably deal gracefully with freeing NULL
 */
void sfree(void *p) {
    if (p) {
	free(p);
    }
}

/*
 * srealloc should guaranteeably be able to realloc NULL
 */
void *srealloc(void *p, size_t size) {
    void *q;
/*#ifdef PTRDIFF_MAX
    if (size > PTRDIFF_MAX)
	fatal("allocation too large");
#endif*/
    if (p) {
	q = realloc(p, size);
    } else {
	q = malloc(size);
    }
    /*if (!q)
	fatal("out of memory");*/
    return q;
}

/*
 * dupstr is like strdup, but with the never-return-NULL property
 * of smalloc (and also reliably defined in all environments :-)
 */
/*char *dupstr(const char *s) {
    char *r = smalloc(1+strlen(s));
    strcpy(r,s);
    return r;
}*/


void memset(void* in, uint8_t val, int size) {
    uint8_t* inx=(uint8_t*)in;
    while(size--) {
    *inx=val;
    inx++;
    }
}
#undef memcpy
void* memcpy(void *dest, const void* src, size_t n) {
    void* original_dest=dest;
    while(n--) {
    *(uint8_t*)dest=*(uint8_t*)src;
    dest++;
    src++;
    }
    return original_dest;
}

void* realloc(void* ptr, uint64_t size) {
    void* new_ptr=malloc(size);
    memcpy(new_ptr, ptr, size);
    free(ptr);
    return new_ptr;
}
/*
 * void* realloc(void* p, uint64_t size) {
  // haha funny
  void* new = malloc(size);
  void* c = new;
  for(uint64_t i = 0; i < size; i++) {
    *c = *(p + i);
    c++;
  }
  return new;
}
 */