import {quot} from "./0144_diffQuot.js";

export function derivate(x0, f){
    let dx = .1;
    let temp = 1;

    while(Math.abs(quot(dx) - quot(temp)) > .001){
        temp = dx;
        dx /= 10;
    }

    return quot(dx);
}