import {randomNum} from "./0219_randomNum.mjs";

export function rndArrayItem(array, num = 1){
    const len = array.length;
    const result = [];

    if(num === 1){
        return array[randomNum(0, len)];
    }

    while(num--){
        result.push(array[randomNum(0, len)]);
    }

    return result;
}