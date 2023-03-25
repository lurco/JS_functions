export function roundToNearest(array, value){
    return array?.length !== 0 ? array
        .map((number, i) => [Math.abs(number - value), i])
        .filter(((diff, i, ar) => diff === Math.min(...ar)))
        .map((item) => array[item[1]]).flat() : [];
}

console.log(roundToNearest([1,2,3,4,6,12], 10))