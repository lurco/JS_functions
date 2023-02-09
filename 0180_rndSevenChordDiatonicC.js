import {rndWhitekey} from "./0145_randomWhitekey.js";
import {majorScale} from "./0181_majorScale.js";

export function rndSevenChordDiatonicC(){
    const types = ['maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'm7b5'];

    const tone = rndWhitekey();

    return tone.toUpperCase().concat(types[majorScale('c').at(tone)]);
}