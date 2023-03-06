import {randomNum} from "./0219_randomNum.mjs";
import {getRndStr} from "./331_getRndStr.mjs";
import {capitalizeFirstLetter} from "./0264_capitalizeFirstLetter.mjs";

export function rndSentence(minWords = 3, maxWords = 10){
    let wordsNum = randomNum(minWords, maxWords + 1);
    const words = [];

    while(wordsNum--){
        words.push(getRndStr(7));
    }

    return capitalizeFirstLetter(words.join(' ')) + '.';
}
