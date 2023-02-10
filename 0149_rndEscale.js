import {rand} from "./0142_randomsFromArray.mjs";

export function rndEscale(){
    const scale = ['e', 'f#', 'g#', 'a', 'b', 'c#', 'd#'];

    return rand(scale)[0];
}