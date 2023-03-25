import {expectedValue} from "./0405_expectedValue.mjs";

export function standardDeviation(ar){
    return Math.sqrt(ar.reduce((acc, ce) => acc + (expectedValue(ar) - ce) ** 2, 0) / (ar.length - 1));
}
