export function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  Math.floor(integer);
    for(let ix = 0; ix < digits.toString().length; ix++) {
        sum += parseInt(digits.toString()[ix]);
    }
    return sum;
}
