import {rndCbscale} from "./0159_rndCbscale.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicCb(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndCbscale();

    return tone.toUpperCase().concat(types[majorScale('cb')].at(tone));
}