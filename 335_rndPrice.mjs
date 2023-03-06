import {randomNum} from "./0219_randomNum.mjs";

export function rndPrice(lowerBound = 0, upperBound = 100){
    return `${randomNum(lowerBound, upperBound)}.${randomNum(0,100).toString().padStart(2, '0')}`;
}
