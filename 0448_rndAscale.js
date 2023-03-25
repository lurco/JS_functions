import {rand} from "./0142_randomsFromArray.mjs";

export function rndAscale(){
    const scale = ['a', 'b', 'c#', 'd', 'e', 'f#', 'g#'];

    return rand(scale, 1)[0];
}