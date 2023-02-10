import {rndEbscale} from "./0155_rndEbscale.js";
import {majorScale} from "./0181_majorScale.mjs";

export function rndSevenChordDiatonicEb(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndEbscale();

    return tone.toUpperCase().concat(types[majorScale('eb').at(tone)]);
}