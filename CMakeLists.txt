cmake_minimum_required(VERSION 3.23)
project(sprig_net C)
set(CMAKE_C_STANDARD 11)
include_directories(.)

add_library(fakestd
        real_malloc.c
        malloc.c
        qsort.c
        dsf.c
        findloop.c
        js_random.c
        tree234.c
        )

add_executable(sprig_net
        game.c
        )

target_link_libraries(sprig_net fakestd)
