import {rndEscale} from "./0149_rndEscale.js";

export function rndTriadChordDiatonicE(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['e', 'f#', 'g#', 'a', 'b', 'c#', 'd#'];

    const tone = rndEscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}