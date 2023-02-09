import {rndEbscale} from "./0155_rndEbscale.js";

export function rndTriadChordDiatonicEb(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['eb', 'f', 'g', 'ab', 'bb', 'c', 'd'];

    const tone = rndEbscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}