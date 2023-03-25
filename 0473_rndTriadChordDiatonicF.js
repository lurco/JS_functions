import {rndFscale} from "./0153_rndFscale.js";

export function rndTriadChordDiatonicF(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['f', 'g', 'a', 'bb', 'c', 'd', 'e'];

    const tone = rndFscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}