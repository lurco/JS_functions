import {rndGscale} from "./0146_rndGscale.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicG(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndGscale();

    return tone.toUpperCase().concat(types[majorScale('g')].at(tone));
}