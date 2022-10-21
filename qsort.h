//
// Created by me on 10/20/22.
//

#ifndef SPRIG_NET_QSORT_H
#define SPRIG_NET_QSORT_H

static inline int a_ctz_32(uint32_t x);
static inline int a_ctz_64(uint64_t x);
static inline int a_ctz_l(unsigned long x);
static inline int pntz(size_t p[2]);
static void cycle(size_t width, unsigned char* ar[], int n);
static inline void shl(size_t p[2], int n);
static inline void shr(size_t p[2], int n);
typedef int (*cmpfun)(const void *, const void *, void *);
static void sift(unsigned char* head, size_t width, cmpfun cmp, void* arg, int pshift, size_t lp[]);
static void trinkle(unsigned char* head, size_t width, cmpfun cmp, void* arg, size_t pp[2], int pshift, int trusty, size_t lp[]);
void qsort(void* base, size_t nel, size_t width, cmpfun cmp, void* arg);

#endif //SPRIG_NET_QSORT_H
