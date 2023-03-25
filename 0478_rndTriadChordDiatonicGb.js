import {rndGbscale} from "./0158_rndGbscale.js";

export function rndTriadChordDiatonicGb(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['gb', 'ab', 'bb', 'cb', 'db', 'eb', 'f'];

    const tone = rndGbscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}