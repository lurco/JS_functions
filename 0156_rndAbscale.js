import {rand} from "./0142_randomsFromArray.js";

export function rndAbscale(){
    const scale = ['ab', 'bb', 'c', 'db', 'eb', 'f', 'g'];

    return rand(scale)[0];
}