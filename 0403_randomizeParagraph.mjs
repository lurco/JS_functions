import {permuteArray} from "./0220_permuteArray.mjs";

export function randomizeParagraph(paragraph){
    return permuteArray(paragraph.split('. ')).join('. ');
}
