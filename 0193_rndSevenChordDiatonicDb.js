import {rndDbscale} from "./0157_rndDbscale.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicDb(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndDbscale();

    return tone.toUpperCase().concat(types[majorScale('db').at(tone)]);
}