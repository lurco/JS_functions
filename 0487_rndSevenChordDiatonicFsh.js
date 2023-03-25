import {rndFshScale} from "./0151_rndFshScale.js";
import {majorScale} from "./0181_majorScale.mjs";

export function rndSevenChordDiatonicFsh(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndFshScale();

    return tone.toUpperCase().concat(majorScale('f#').at(tone));
}