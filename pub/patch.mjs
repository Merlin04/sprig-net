import fs from "fs/promises";

let t = await fs.readFile("./main.mjs", "utf8");
const f = await fs.readFile("./fns.js", "utf8");
eval(f);
const r = /function undefined_weak_JS_([A-z0-9_]+)([^}]+})/dg;let m;while(m=r.exec(t)) {
    console.log(JSON.stringify(m), m.indices);
    const [_3, name] = m;
    const [_, [start], [_2, end]] = m.indices;
    console.log(name);
    const j = globalThis[name].toString().substring("function ".length);
    t = t.slice(0, start) + j + t.slice(end);
}
t = t.replace("function __wasm_call_ctors", `globalThis.c_buffer = buffer;
globalThis.HEAP8 = HEAP8;
globalThis.HEAP16 = HEAP16;
globalThis.HEAP32 = HEAP32;
globalThis.HEAPU8 = HEAPU8;
globalThis.HEAPU16 = HEAPU16;
globalThis.HEAPU32 = HEAPU32;
globalThis.HEAPF32 = HEAPF32;
globalThis.HEAPF64 = HEAPF64;
function __wasm_call_ctors`);
await fs.writeFile("./main.mjs", t);