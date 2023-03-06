import {randomNum} from "./0219_randomNum.mjs";

export function getRndStr(len = 1){
    const result = [];
    while(len--){
        result.push(String.fromCodePoint(randomNum('a'.codePointAt(0), 'z'.codePointAt(0) + 1)));
    }

    return result.join('');
}
