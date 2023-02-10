import {rand} from "./0142_randomsFromArray.mjs";

export function rndFshScale(){
    const scale = ['f#', 'g#', 'a#', 'b', 'c#', 'd#', 'e#'];

    return rand(scale)[0];
}