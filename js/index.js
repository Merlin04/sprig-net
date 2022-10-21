import { malloc, new_game_desc as c_new_game_desc } from "../pub/main.min.mjs";

function read_cstr(pt) {
    let s = "";
    while (HEAPU8[pt] != 0) {
        s += String.fromCharCode(HEAPU8[pt++]);
    }
    return s;
}

function new_game_desc() {
    const solution_pt = malloc(8);
    const r_pt = c_new_game_desc(solution_pt);
    return {
        level: read_cstr(r_pt),
        solution: read_cstr(HEAP32[solution_pt >> 2])
    };
}

console.log(new_game_desc());