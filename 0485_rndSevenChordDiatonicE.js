import {rndEscale} from "./0149_rndEscale.js";
import {majorScale} from "./0181_majorScale.mjs";

export function rndSevenChordDiatonicE(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndEscale();

    return tone.toUpperCase().concat(types[majorScale('e').at(tone)]);
}