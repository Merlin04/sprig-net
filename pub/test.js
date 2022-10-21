let m = await import("./main.mjs")
let my_str = m.malloc(8)
my_str
let r = m.new_game_desc(my_str)
r
HEAP8[r]
let a = Array.from({ length: 15 }, (_, i) => r + i)
a.map(a => HEAP8[a]).map(c => String.fromCharCode(c))
a.map(a => HEAPU8[a]).map(c => String.fromCharCode(c))
a.map(a => HEAP8[a]).map(c => String.fromCharCode(c))
a.map(a => HEAP8[a - 0]).map(c => String.fromCharCode(c))
a = Array.from({ length: 150 }, (_, i) => r + i)
a.map(a => HEAP8[a - 0]).map(c => String.fromCharCode(c))
a.map(a => HEAP8[a - 0]).map(c => String.fromCharCode(c)).join("")
HEAP8[my_str]
String.fromCharCode(HEAPU8[my_str])
HEAP32[my_str >> 2]
HEAPU8[HEAP32[my_str >> 2]]
String.fromCharCode(HEAPU8[HEAP32[my_str >> 2]])