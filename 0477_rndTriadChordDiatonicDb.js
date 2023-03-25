import {rndDbscale} from "./0157_rndDbscale.js";

export function rndTriadChordDiatonicDb(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['db', 'eb', 'f', 'gb', 'ab', 'bb', 'c'];

    const tone = rndDbscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}