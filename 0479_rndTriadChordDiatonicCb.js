import {rndCbscale} from "./0159_rndCbscale.js";

export function rndTriadChordDiatonicCb(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['cb', 'db', 'eb', 'fb', 'gb', 'ab', 'bb'];

    const tone = rndCbscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}