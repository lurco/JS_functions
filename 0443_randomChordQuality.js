import {rand} from "./0142_randomsFromArray.mjs";

export function randomChordQuality(){
    const types = ['maj', 'min', 'dim', 'aug', 'sus4', 'sus2', 'lyd',
                'maj7', 'min7', '7', 'm7b5', 'dim7', 'sus7',
                '6', 'm6', '6/9', 'm6/9',
                'maj9', 'min9', '9', 'majb9', 'min7b9', '7b9'];

    return rand(types);
}