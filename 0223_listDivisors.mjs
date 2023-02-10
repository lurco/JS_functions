import {listPrimes} from "./0224_listPrimes.mjs";

export function listDivisors(n){
    let temp = n;
    const primes = listPrimes(n);
    const result = [];
    let divisor = 2;

    primes.forEach((prime) => {
        while (temp > 1) {
            if (temp % divisor === 0) {
                result.push(divisor);
                temp /= divisor;
            } else {
                divisor = prime;
            }
        }
    });
}