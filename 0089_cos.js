import {factorial} from "./0073_factorial.js";

export function cos(x){
    let result = 1;

    for(let i = 1; Math.abs(x**(2*i + 2) / factorial(2*i + 2)) > 0.0001; i++){
        result += (-1) ** i *
                    x ** (2*i) / factorial(2 * i);
    }

    return result;
}
