import {conjugateComplexNumber} from "./316_conjugateComplexNumber.mjs";
import {multiplyComplexNumber} from "./318_multiplyComplexNumber.mjs";
import {multiplyByReal} from "./321_multiplyByReal.mjs";
import {modulusComplexNumber} from "./317_modulusComplexNumber.mjs";

export function divideComplexNumber(x, y){
    return multiplyComplexNumber(multiplyByReal(x, 1 / (modulusComplexNumber(y) ** 2) ), conjugateComplexNumber(y));
}

