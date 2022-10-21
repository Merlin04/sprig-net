#include "real_malloc.h"
#include <stdint.h>

// TODO: wasm2js_memory_copy

extern unsigned char __heap_base;

unsigned int bump_pointer = &__heap_base;
void* malloc(uint64_t n) {
  unsigned int r = bump_pointer;
  bump_pointer += n;
  return (void *)r;
}

void free(void* p) {
  // lol
}