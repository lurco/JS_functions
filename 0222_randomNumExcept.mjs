import {randomNum} from "./0219_randomNum.mjs";
import {range} from "./0131_range.mjs";

export function randomNumExcept(start = 0, stop = 'None', exceptions = []){
    if(stop === 'None'){
        stop = start;
        start = 0;
    }

    const set = range(start, stop).filter((num) => ! exceptions.includes(num));

    return set[randomNum(0, set.length)];
}