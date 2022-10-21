//
// Created by me on 10/20/22.
//

#ifndef SPRIG_NET_DSF_H
#define SPRIG_NET_DSF_H

#include "bool.h"

void dsf_init(int *dsf, int size);
int* snew_dsf(int size);
int edsf_canonify(int* dsf, int index, bool* inverse_return);
void edsf_merge(int* dstf, int v1, int v2, bool inverse);
int dsf_canonify(int* dsf, int index);
void dsf_merge(int* dsf, int v1, int v2);
int dsf_size(int* dsf, int index);


#endif //SPRIG_NET_DSF_H
