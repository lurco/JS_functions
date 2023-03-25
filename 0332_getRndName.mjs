import {getRndStr} from "./0331_getRndStr.mjs";
import {randomNum} from "./0219_randomNum.mjs";
import {capitalizeFirstLetter} from "./0264_capitalizeFirstLetter.mjs";

export function getRndName(gender = 'male'){
    const len = randomNum(3, 7);

    return capitalizeFirstLetter(getRndStr(len) + (gender === 'female' ? 'a' : ''));
}

