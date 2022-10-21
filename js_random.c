#include "js_random.h"


/*double random_seed;

void init_random(double seed) {
    random_seed = seed;
}


unsigned long random_upto(unsigned long limit)
{
    int bits = 0;
    unsigned long max, divisor, data;

    while ((limit >> bits) != 0)
        bits++;

    bits += 3;
//    assert(bits < 32);

    max = 1L << bits;
    divisor = max / limit;
    max = limit * divisor;

    do {
        data = random_bits(bits);
    } while (data >= max);

    return data / divisor;
}*/

