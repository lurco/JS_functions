import {rand} from "./0142_randomsFromArray.js";

export function rndTriadChordQuality() {
    const types = ['maj', 'min', 'dim', 'aug', 'sus4', 'sus2', 'lyd'];

    return rand(types)[0];
}
