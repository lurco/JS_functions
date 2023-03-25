import {rndDscale} from "./0147_rndDscale.js";

export function rndChordDiatonicD(){
    const types = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
    const scale = ['d', 'e', 'f#', 'g', 'a', 'b', 'c#'];

    const tone = rndDscale();

    return tone.toUpperCase().concat(types[scale.indexOf(tone)]);
}