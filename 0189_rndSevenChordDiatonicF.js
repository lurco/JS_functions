import {rndFscale} from "./0153_rndFscale.js";
import {majorScale} from "./0181_majorScale.mjs";

export function rndSevenChordDiatonicF(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndFscale();

    return tone.toUpperCase().concat(types[majorScale('f').at(tone)]);
}