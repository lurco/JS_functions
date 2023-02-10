import {circleArea} from "./0061_circleArea.js";

export function coneArea(r, h){
    const l = Math.sqrt(r**2 + h**2);

    return circleArea(r) + circleArea(l) * r / l;
}