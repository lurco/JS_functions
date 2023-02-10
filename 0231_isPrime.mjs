import {listPrimes} from "./0224_listPrimes.mjs";

export function isPrime(n){
    const primes = listPrimes(n + 1);

    return primes.includes(n);
}

console.log(isPrime(44))
