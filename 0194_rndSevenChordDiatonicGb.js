import {rndGbscale} from "./0158_rndGbscale.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicGb(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndGbscale();

    return tone.toUpperCase().concat(types[majorScale('gb').at(tone)]);
}