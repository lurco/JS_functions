import {rand} from "./0142_randomsFromArray.js";

export function rndWhitekey(){
    const whiteKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

    return rand(whiteKeys, 1)[0];
}