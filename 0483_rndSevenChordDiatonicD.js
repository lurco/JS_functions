import {rndDscale} from "./0147_rndDscale.js";
import {majorScale} from "./0181_majorScale.mjs";

export function rndSevenChordDiatonicD(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndDscale();

    return tone.toUpperCase().concat(types[majorScale('d').at(tone)]);
}