import {rand} from "./0142_randomsFromArray.js";

export function rndGscale(){
    const scale = ['g', 'a', 'b', 'c', 'd', 'e', 'f#'];

    return rand(scale, 1)[0];
}