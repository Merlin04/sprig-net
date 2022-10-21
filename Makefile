OUTDIR = pub
SOURCE = dsf.c findloop.c game.c js_random.c malloc.c qsort.c real_malloc.c tree234.c
CC = clang
FLAGS =   --target=wasm32 \
          -Os \
          -g \
          -fvisibility=default \
          -flto \
          -nostdlib \
          -Wl,--export-all \
          -Wl,--no-entry \
          -Wl,--lto-O3 \
          -Wl,--allow-undefined \
          -Wall \
          -mbulk-memory

build:
	mkdir -p $(OUTDIR)
	$(CC) $(FLAGS) -o $(OUTDIR)/main.wasm $(SOURCE)
	~/clones/emscripten-core--emsdk/upstream/bin/wasm2js $(OUTDIR)/main.wasm > $(OUTDIR)/main.mjs
	cd pub; node patch.mjs
	cat $(OUTDIR)/main.mjs | npx terser -c -m > $(OUTDIR)/main.min.mjs

# clean:
# 	rm -r $(OUTDIR)

all: build
