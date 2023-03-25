import {rand} from "./0142_randomsFromArray.mjs";

export function rndSixChordQuality(){
    const types = ['6', 'm6', '6/9', 'm6/9'];

    return rand(types)[0];
}