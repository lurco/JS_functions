import {rndCshScale} from "./0152_rndCshScale.js";

export function rndTriadChordDiatonicCsh(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['c#', 'd#', 'e#', 'f#', 'g#', 'a#', 'b#'];

    const tone = rndCshScale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}