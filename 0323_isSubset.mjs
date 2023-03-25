export function isSubset(arrA, arrB){
    return arrA.every((item) => arrB.includes(item))
}
