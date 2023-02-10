import {listPrimes} from "./0224_listPrimes.mjs";
import {rand} from "./0142_randomsFromArray.mjs";

export function randomPrime(n){
    const primes = listPrimes(n);

    return rand(primes)[0];
}

console.log(randomPrime(165));