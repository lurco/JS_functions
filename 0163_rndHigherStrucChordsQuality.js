import {rand} from "./0142_randomsFromArray.js";

export function rndHigherStrucChordQuality(){
    const types = ['maj9', 'min9', '9', 'majb9', 'min7b9', '7b9'];

    return rand(types)[0];
}