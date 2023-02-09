import {rndGscale} from "./0146_rndGscale.js";

export function rndTriadChordDiatonicG(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['g', 'a', 'b', 'c', 'd', 'e', 'f#'];

    const tone = rndGscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}