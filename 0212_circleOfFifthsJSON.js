import {cycleArray} from "./0211_cycleArray.mjs";

function circleOfFifths(note, n = 1) {
    n = Math.round(n);

    class Tone {
        constructor(name, sharpName, flatName, accidentals) {
            this.name = name;
            this.sharpName = sharpName;
            this.flatName = flatName;
            this.accidentals = accidentals;
        }
    }
    const twelveTones = [];
    const a = new Tone('a', null, null,3);
    twelveTones.push(a);
    const bb = new Tone(null, 'a#', 'bb',-2);
    twelveTones.push(bb);
    const b = new Tone('b', null, 'cb',5);
    twelveTones.push(b);
    const c = new Tone('c', 'b#', null,0);
    twelveTones.push(c);
    const db = new Tone(null, 'c#', 'db',-5);
    twelveTones.push(db);
    const d = new Tone('d', null, null,2);
    twelveTones.push(d);
    const eb = new Tone(null, 'd#', 'eb',-3);
    twelveTones.push(eb);
    const e = new Tone('e', null, 'fb',4);
    twelveTones.push(e);
    const f = new Tone('f', 'e#', null,-1);
    twelveTones.push(f);
    const fsh = new Tone(null, 'f#', 'gb',6);
    twelveTones.push(fsh);
    const g = new Tone('g', null, null,1);
    twelveTones.push(g);
    const ab = new Tone(null, 'g#', 'ab',-4);
    twelveTones.push(ab);

    let isSharp = 0;

    const index = twelveTones.findIndex(({name, sharpName, flatName}) => {
        switch(note){
            case name:
                isSharp = 0;
                return true;
            case sharpName:
                isSharp = 1;
                return true;
            case flatName:
                isSharp = -1;
                return true;
        }
    });
    return cycleArray(twelveTones, n > 0 ? 7 * n : 5 * Math.abs(n))[index];
}
