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

/*const {
    test,
    test2,
    test3
}= new Proxy({ _l: "A".charCodeAt() }, {
    get(obj) {
        return String.fromCharCode(obj._l++);
    }
});*/

// TODO: generate rotated sprites, make sprites 16x16 (not that bad looking), create wrapper around sprig for easy rendering (like vdom)

const makeSprite = (n, active) => {
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

// rotate a sprite in increments of 90 degrees
const rotateSpriteText = (sprite, deg) => {
    const rotate90 = sprite => {
        const s = sprite.split("\n");
        return Array.from({ length: s.length }, (_, i) =>
            Array.from({ length: s.length }, (_, j) => s[s.length - j - 1][i]).join("")
        ).join("\n");
        // return sprite
        //     .split("\n")
        //     .map((l, y) => l
        //         .split("")
        //         .map((c, x) => sprite.split("\n")[x][y])
        //         .reverse()
        //         .join("")
        //     ).join("\n");
    };
    for(let i = 0; i < deg / 90; i++) {
        sprite = rotate90(sprite);
    }
    return sprite;
}

const legend = [];
const chars = new Map();
const getChar = (n, active, deg = 0) => {
    const key = `${n},${active},${deg}`;
    if(chars.has(key)) return chars.get(key);
    const sprite = rotateSpriteText(makeSprite(n, active), deg);
    const char = String.fromCharCode(legend.length + "A".charCodeAt(0));
    chars.set(key, char);
    legend.push([char, sprite]);
    setLegend(...legend);
    return char;
}
/*
const setTimes = (s, t) => s.flatMap(sE => t.map(tE => [sE, tE]));
const getChar = (n, active) => String.fromCharCode(((n - 1) * 2) + active + "A".charCodeAt(0));
const legend = setTimes([1, 2, 3, 4], [false, true])
    .map(a => makeSprite(...a))
    .reduce((acc, cur, idx) => [...acc,
        [String.fromCharCode(idx + "A".charCodeAt(0)), cur]
    ], []);
console.log(legend);
setLegend(...legend);*/

// setLegend(['a', makeSprite(1, false)]);

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
${getChar(2, true, 0)}${getChar(2, true, 90)}
${getChar(2, true, 180)}${getChar(2, true, 270)}
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