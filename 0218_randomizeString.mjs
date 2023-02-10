import {permuteArray} from "./0220_permuteArray.mjs";

export function randomizeString(str){
    return permuteArray(str.split('')).join('');
}

console.log(randomizeString('Litwo ojczyzno moja, ty jesteś jak zdrowie! Ile Cię trzeba cenić, ten tylko się dowie, kto Cię stracił.'));