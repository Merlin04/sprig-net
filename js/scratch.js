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

/*setPushables({
    [ player ]: [],
});

onInput("s", () => {
    getFirst(player).y += 1
});

afterInput(() => {

});
*/
/*const {
    test,
    test2,
    test3
}= new Proxy({ _l: "A".charCodeAt() }, {
    get(obj) {
        return String.fromCharCode(obj._l++);
    }
});*/