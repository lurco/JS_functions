import {rndWhitekey} from "./0145_randomWhitekey.js";

export function rndTriadChordDiatonicC(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const whiteKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

    const tone = rndWhitekey();

    return tone.toUpperCase().concat(types[whiteKeys.indexOf(tone)]);
}