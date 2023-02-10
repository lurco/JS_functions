import {rndAscale} from "./0148_rndAscale.js";
import {majorScale} from "./0181_majorScale.mjs";

export function rndSevenChordDiatonicA(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndAscale();

    return tone.toUpperCase().concat(types[majorScale('a').at(tone)]);
}