import {rand} from "./0142_randomsFromArray.js";

export function rndBscale(){
    const scale = ['b', 'c#', 'd#', 'e', 'f#', 'g#', 'a#'];

    return rand(scale)[0];
}