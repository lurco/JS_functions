import {rndAbscale} from "./0156_rndAbscale.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicAb(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndAbscale();

    return tone.toUpperCase().concat(types[majorScale('ab').at(tone)]);
}