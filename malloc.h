#pragma once
#include <stdint.h>

#define snew(type) \
    ( (type *) smalloc (sizeof (type)) )
#define snewn(number, type) \
    ( (type *) smalloc ((number) * sizeof (type)) )
#define sresize(array, number, type) \
    ( (type *) srealloc ((array), (number) * sizeof (type)) )

typedef unsigned long size_t; // no

void* realloc(void* p, uint64_t size);
void* smalloc(size_t size);
void sfree(void* p);
void* srealloc(void* p, size_t size);
// memset
void memset(void* in, uint8_t val, int size);
// memcpy
void* memcpy(void *dest, const void* src, size_t n);