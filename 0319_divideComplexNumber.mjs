import {conjugateComplexNumber} from "./0316_conjugateComplexNumber.mjs";
import {multiplyComplexNumber} from "./0318_multiplyComplexNumber.mjs";
import {multiplyByReal} from "./0321_multiplyByReal.mjs";
import {modulusComplexNumber} from "./0317_modulusComplexNumber.mjs";

export function divideComplexNumber(x, y){
    return multiplyComplexNumber(multiplyByReal(x, 1 / (modulusComplexNumber(y) ** 2) ), conjugateComplexNumber(y));
}

