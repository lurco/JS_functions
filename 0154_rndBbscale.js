import {rand} from "./0142_randomsFromArray.js";

export function rndBbscale(){
    const scale = ['bb', 'c', 'd', 'eb', 'f', 'g', 'a'];

    return rand(scale)[0];
}