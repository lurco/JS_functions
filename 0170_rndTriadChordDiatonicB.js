import {rndBscale} from "./0150_rndBscale.js";

export function rndTriadChordDiatonicB(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['b', 'c#', 'd#', 'e', 'f#', 'g#', 'a#'];

    const tone = rndBscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}