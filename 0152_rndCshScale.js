import {rand} from "./0142_randomsFromArray.js";

export function rndCshScale(){
    const scale = ['c#', 'd#', 'e#', 'f#', 'g#', 'a#', 'b#'];

    return rand(scale)[0];
}