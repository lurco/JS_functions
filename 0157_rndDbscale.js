import {rand} from "./0142_randomsFromArray.js";

export function rndDbscale(){
    const scale = ['db', 'eb', 'f', 'gb', 'ab', 'bb', 'c'];

    return rand(scale)[0];
}