import {permuteArray} from "./0220_permuteArray.mjs";

export function randomizeWord(word){
    return permuteArray(word.split('')).join('');
}
