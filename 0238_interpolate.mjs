import {slope} from "./0236_slope.mjs";

export function interpolate(p1, p2){

    const tangent = slope(p1, p2);

    return (x) => tangent * x + p1[1] - tangent * p1[0];
}