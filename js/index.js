/*
@title: sprig_net
@author: Merlin04
*/

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

const {
    test,
    test2,
    test3
}= new Proxy({ _l: "A".charCodeAt() }, {
    get(obj) {
        return String.fromCharCode(obj._l++);
    }
});


const makeSprite = (n, active) => {
    // console.log("-----------------------------------------");
    // console.log(n, active);
    const t = Array.from({ length: 15 }, () => Array(15).fill(".")); // t[y][x]
    // only used for straight lines
    const drawLine = (dirX, dirY, thick) => {
        const fill = thick ? "0" : "7";
        const isNeg = (dirX < 0 || dirY < 0);
        for(let i = thick ? (isNeg ? 8 : 6) : 7; isNeg ? i >= 0 : i < 15; isNeg ? i-- : i++) {
            const y = dirX !== 0 ? 7 : i;
            const x = dirX !== 0 ? i : 7;
            const uy = dirX !== 0 ? y - 1 : y;
            const ux = dirX !== 0 ? x : x - 1;
            const ly = dirX !== 0 ? y + 1 : y;
            const lx = dirX !== 0 ? x : x + 1;
            thick && t[uy][ux] !== "7" && (t[uy][ux] = fill);
            t[uy][ux] !== "7" && (t[y][x] = fill);
            thick && t[ly][lx] !== "7" && (t[ly][lx] = fill);
        }
        // console.log(dirX, dirY, thick);
        // console.log(d());
    };
    const drawCenterBox = (r, fill) => {
        for(let y = 7 - r; y <= 7 + r; y++) {
            for(let x = 7 - r; x <= 7 + r; x++) {
                t[y][x] = fill;
            }
        }
    };
    const d = () => t.reduce((acc, cur) => acc + "\n" + cur.join(""), "");

    let coords = {
        1: [[1, 0]]
    };
    coords[2] = [...coords[1], [0, 1]];
    coords[3] = [...coords[2], [0, -1]];
    coords[4] = [...coords[3], [-1, 0]];

    coords[n].forEach(c => (drawLine(...c, true), active && drawLine(...c, false)));

    // draw boxes
    if(n === 1 || n === 4) {
        drawCenterBox(5, "0");
        if(n === 1) drawCenterBox(4, active ? "7" : "5");
    }

    return d();
};

const setTimes = (s, t) => s.flatMap(sE => t.map(tE => [sE, tE]));
const getChar = (n, active) => String.fromCharCode(((n - 1) * 2) + active + "A".charCodeAt(0));
const legend = setTimes([1, 2, 3, 4], [false, true])
    .map(a => makeSprite(...a))
    .reduce((acc, cur, idx) => [...acc,
        [String.fromCharCode(idx + "A".charCodeAt(0)), cur]
    ], []);
console.log(legend);
setLegend(...legend);

/*
const player = "p";

setLegend(
    [ player, bitmap`
................
................
................
....555555555...
....555555555...
....555555555...
....555555555...
....555555555...
....555555555...
....555555555...
....555555555...
....555555555...
....555555555...
................
................
................`
    ]
);*/

setSolids([]);

let level = 0;
const levels = [
    map`
${getChar(3, true)}${getChar(2, false)}
${getChar(4, true)}${getChar(1, true)}
`,
];

setMap(levels[level]);

/*setPushables({
    [ player ]: [],
});

onInput("s", () => {
    getFirst(player).y += 1
});

afterInput(() => {

});
*/