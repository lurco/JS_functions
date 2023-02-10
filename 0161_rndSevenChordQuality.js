import {rand} from "./0142_randomsFromArray.mjs";

export function rndSevenChordQuality(){
    const types = ['maj7', 'min7', '7', 'm7b5', 'dim7', 'sus7'];

    return rand(types)[0];
}