import {isSubset} from "./0323_isSubset.mjs";

export function areEqualArrays(arrA, arrB){
    return isSubset(arrA, arrB) && isSubset(arrB, arrA);
}
