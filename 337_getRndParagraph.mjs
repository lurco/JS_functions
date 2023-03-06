import {randomNum} from "./0219_randomNum.mjs";
import {rndSentence} from "./336_rndSentence.mjs";

export function getRndParagraph(minNumOfSentences = 2, maxNumOfSentences = 5){
    let len = randomNum(minNumOfSentences, maxNumOfSentences + 1);
    const sentences = [];

    while(len--){
        sentences.push(rndSentence());
    }

    return sentences.join(' ');
}
