import {rand} from "./0142_randomsFromArray.mjs";

export function rndDscale(){
    const scale = ['d', 'e', 'f#', 'g', 'a', 'b', 'c#'];

    return rand(scale, 1)[0];
}