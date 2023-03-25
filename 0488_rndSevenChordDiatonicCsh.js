import {rndCshScale} from "./0152_rndCshScale.js";
import {majorScale} from "./0181_majorScale.mjs";

export function rndSevenChordDiatonicCsh(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndCshScale();

    return tone.toUpperCase().concat(types[majorScale('c#').at(tone)]);
}