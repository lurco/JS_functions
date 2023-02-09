import {rndBbscale} from "./0154_rndBbscale.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicBb(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndBbscale();

    return tone.toUpperCase().concat(types[majorScale('bb').at(tone)]);
}