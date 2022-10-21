//
// Created by me on 10/20/22.
//

#ifndef SPRIG_NET_JS_RANDOM_H
#define SPRIG_NET_JS_RANDOM_H

#define JS_PLACEHOLDER(RT, N, ...) __attribute__((weak)) RT JS_##N(__VA_ARGS__);
JS_PLACEHOLDER(unsigned long, random_upto, unsigned long limit)
#define random_upto JS_random_upto

#endif //SPRIG_NET_JS_RANDOM_H
