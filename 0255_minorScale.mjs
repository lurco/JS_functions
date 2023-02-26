import {majorScale} from "./0181_majorScale.mjs";
import {namedInterval} from "./0259_namedInterval.mjs";
import {cycleArray} from "./0211_cycleArray.mjs";
import {intervalLength} from "./0257_intervalLength.mjs";

export function minorScale(key = 'a'){

    return cycleArray(majorScale(namedInterval(key, 'm3')), 5);
}

console.log(minorScale('e'))