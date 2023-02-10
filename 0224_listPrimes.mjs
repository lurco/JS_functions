import {range} from "./0131_range.mjs";

export function listPrimes(n){
    let possibles = range(2, n);
    const primes = [];
    let p = 2;

    while(p ** 2 < n){
        possibles = possibles.filter((num) => num % p !== 0);
        primes.push(p);
        p = Math.min(...possibles.filter((i) => ! primes.includes(i)));
    }

    return possibles.concat(primes).sort((a, b) => a - b);
}
