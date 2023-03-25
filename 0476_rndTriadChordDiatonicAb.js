import {rndAbscale} from "./0156_rndAbscale.js";

export function rndTriadChordDiatonicAb(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['ab', 'bb', 'c', 'db', 'eb', 'f', 'g'];

    const tone = rndAbscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}