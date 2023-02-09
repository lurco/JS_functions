import {rndAscale} from "./0148_rndAscale.js";

export function rndTriadChordDiatonicA(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['a', 'b', 'c#', 'd', 'e', 'f#', 'g#'];

    const tone = rndAscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}