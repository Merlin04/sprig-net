/*
@title: sprig_net
@author: Merlin04
*/

import { malloc, new_game_desc as c_new_game_desc } from "../pub/main.min.mjs";

declare global {
    var c_buffer: ArrayBuffer;
    var HEAP8: Int8Array;
    var HEAP16: Int16Array;
    var HEAP32: Int32Array;
    var HEAPU8: Uint8Array;
    var HEAPU16: Uint16Array;
    var HEAPU32: Uint32Array;
    var HEAPF32: Float32Array;
    var HEAPF64: Float64Array;
}

function read_cstr(pt: number) {
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

// TODO: create wrapper around sprig for easy rendering (like vdom)

enum TileType {
    T1,
    T2L,
    T2S,
    T3,
    T4
}

const makeSprite = (type: TileType, active) => {
    // console.log("-----------------------------------------");
    // console.log(n, active);
    const t = Array.from({ length: 16 }, () => Array(16).fill(".")); // t[y][x]
    // only used for straight lines
    const drawLine = (dirX, dirY, thick) => {
        const fill = thick ? "0" : "7";
        const isNeg = (dirX < 0 || dirY < 0);
        for(let i = thick ? (isNeg ? 9 : 6) : (isNeg ? 8 : 7); isNeg ? i >= 0 : i < 16; isNeg ? i-- : i++) {
            const y1 = dirX !== 0 ? 7 : i;
            const x1 = dirX !== 0 ? i : 7;
            const y2 = dirX !== 0 ? 8 : i;
            const x2 = dirX !== 0 ? i : 8;

            const fillP = (x, y) => t[y][x] !== "7" && (t[y][x] = fill);
            fillP(x1, y1);
            fillP(x2, y2);

            if(thick) {
                const uy = dirX !== 0 ? y1 - 1 : y1;
                const ux = dirX !== 0 ? x1 : x1 - 1;
                const ly = dirX !== 0 ? y2 + 1 : y2;
                const lx = dirX !== 0 ? x2 : x2 + 1;
                fillP(ux, uy);
                fillP(lx, ly);
            }
        }
        // console.log(dirX, dirY, thick);
        // console.log(d());
    };
    const drawCenterBox = (r, fill) => {
        for(let y = 8 - r; y <= 7 + r; y++) {
            for(let x = 8 - r; x <= 7 + r; x++) {
                t[y][x] = fill;
            }
        }
    };
    const d = () => t.reduce((acc, cur) => acc + "\n" + cur.join(""), "");

    let coords: Record<number, [number, number][]> = {
        [TileType.T1]: [[1, 0]]
    };
    coords[TileType.T2L] = [...coords[TileType.T1], [0, 1]];
    coords[TileType.T2S] = [...coords[TileType.T1], [-1, 0]];
    coords[TileType.T3] = [...coords[TileType.T2L], [-1, 0]];
    coords[TileType.T4] = [...coords[TileType.T3], [0, 1]];

    coords[type].forEach(c => (drawLine(...c, true), active && drawLine(...c, false)));

    // draw boxes
    if(type === TileType.T1 || type === TileType.T4) {
        drawCenterBox(5, "0");
        if(type === TileType.T1) drawCenterBox(4, active ? "7" : "5");
    }

    return d();
};

// rotate a sprite in increments of 90 degrees
const rotateSpriteText = (sprite, deg) => {
    const rotate90 = sprite => {
        const s = sprite.split("\n");
        return Array.from({ length: s.length }, (_, i) =>
            Array.from({ length: s.length }, (_, j) => s[s.length - j - 1][i]).join("")
        ).join("\n");
    };
    for(let i = 0; i < deg / 90; i++) {
        sprite = rotate90(sprite);
    }
    return sprite;
}

const legend = [];
const chars = new Map();
const getChar = (type: TileType, active, deg = 0) => {
    const key = `${type},${active},${deg}`;
    if(chars.has(key)) return chars.get(key);
    const sprite = rotateSpriteText(makeSprite(type, active), deg);
    const char = String.fromCharCode(legend.length + "A".charCodeAt(0));
    chars.set(key, char);
    legend.push([char, sprite]);
    setLegend(...legend);
    return char;
}

/*
 * Docs from puzzle code:
 * My syntax is extremely simple: each square is encoded as a
 * hex digit in which bit 0 means a connection on the right,
 * bit 1 means up, bit 2 left and bit 3 down. (i.e. the same
 * encoding as used internally). Each digit is followed by
 * optional barrier indicators: `v' means a vertical barrier to
 * the right of it, and `h' means a horizontal barrier below
 * it.
 */

const decodeGameDesc = (desc: string): string => {
    // we aren't using barriers right now so won't implement that part of the spec
    const squares = desc.split("").map(c => {
        const n = Number("0x" + c);
        const a = [0b0001, 0b1000, 0b0100, 0b0010].map(m => (n & m) !== 0);
        const count = a.reduce((acc, cur) => acc + Number(cur), 0);
        const [right, down, left, up] = a;
        const type = count === 1 ? TileType.T1
            : count === 2 ? (right || left ? TileType.T2S : TileType.T2L)
            : count === 3 ? TileType.T3
            : TileType.T4;

        let deg;
        if(type === TileType.T1) {
            deg = a.findIndex(v => v) * 90;
        } else if(type === TileType.T2L) {
            // deg = a.findIndex(v => v) * 90;
            // doesn't work, because 0 and 270 would both be 0

        } else if(type === TileType.T2S) {
            deg = a.findIndex(v => v) * 90;
        } else if(type === TileType.T3) {

        }

        // const deg = (right ? 0 : 0) + (up ? 90 : 0) + (left ? 180 : 0) + (down ? 270 : 0);
    });
    const gridDim = Math.sqrt(desc.length);
}



setSolids([]);

let level = 0;
const levels = [
    map`
${getChar(3, true)}${getChar(2, false)}
${getChar(4, true)}${getChar(1, true)}
${getChar(2, true, 0)}${getChar(2, true, 90)}
${getChar(2, true, 180)}${getChar(2, true, 270)}
`,
];

setMap(levels[level]);

