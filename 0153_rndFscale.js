import {rand} from "./0142_randomsFromArray.js";

export function rndFscale(){
    const scale = ['f', 'g', 'a', 'bb', 'c', 'd', 'e'];

    return rand(scale)[0];
}