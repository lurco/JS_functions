import {rndBscale} from "./0150_rndBscale.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicB(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndBscale();

    return tone.toUpperCase().concat(types[majorScale('b').at(tone)]);
}