import {rand} from "./0142_randomsFromArray.mjs";

export function rndEbscale(){
    const scale = ['eb', 'f', 'g', 'ab', 'bb', 'c', 'd'];

    return rand(scale)[0];
}