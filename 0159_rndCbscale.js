import {rand} from "./0142_randomsFromArray.js";

export function rndCbscale(){
    const scale = ['cb', 'db', 'eb', 'fb', 'gb', 'ab', 'bb'];

    return rand(scale)[0];
}