import {rand} from "./0142_randomsFromArray.mjs";

export function rndBbscale(){
    const scale = ['bb', 'c', 'd', 'eb', 'f', 'g', 'a'];

    return rand(scale)[0];
}