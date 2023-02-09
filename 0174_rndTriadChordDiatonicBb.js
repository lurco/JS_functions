import {rndBbscale} from "./0154_rndBbscale.js";

export function rndTriadChordDiatonicBb(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['bb', 'c', 'd', 'eb', 'f', 'g', 'a'];

    const tone = rndBbscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}