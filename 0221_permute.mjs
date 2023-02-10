import {randomNumExcept} from "./0222_randomNumExcept.mjs";

export function permute(n){
    const exceptions = [];
    const result = [];
    let temp = 0;

    for(let i = 1; i < n+1; i++){
        temp = randomNumExcept(1, n + 1, exceptions);
        result.push(temp);
        exceptions.push(temp);
    }

    return result;
}

console.log(permute(20));