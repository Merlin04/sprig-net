#!/bin/sh

clang --target=wasm32 -O3 -flto -nostdlib -Wl,--no-entry -Wl,--export-all -Wl,--lto-O3 -v -Xlinkerv -o tmp.wasm $1
~/clones/emscripten-core--emsdk/upstream/bin/wasm2js tmp.wasm > out.js
trash tmp.wasm
