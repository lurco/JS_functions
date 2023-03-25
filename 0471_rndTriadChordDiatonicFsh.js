import {rndFshScale} from "./0151_rndFshScale.js";

export function rndTriadChordDiatonicFsh(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['f#', 'g#', 'a#', 'b', 'c#', 'd#', 'e#'];

    const tone = rndFshScale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);

}