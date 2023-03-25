import {permuteArray} from "./0220_permuteArray.mjs";

export function randomizeSentence(sentence){
    return permuteArray(sentence.split(' ')).join(' ');
}