import {factorial} from "./0073_factorial.js";

export function exp(x){
    let result = 1;

    for(let i = 1; Math.abs(x ** (i+1) / factorial(i + 1)) > 0.001; i++){
        result += x**i / factorial(i);
    }

    return result;
}