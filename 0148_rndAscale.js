import {rand} from "./0142_randomsFromArray.js";

export function rndAscale(){
    const scale = ['a', 'b', 'c#', 'd', 'e', 'f#', 'g#'];

    return rand(scale, 1)[0];
}