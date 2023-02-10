import {slope} from "./0236_slope.mjs";

export function inclination(p1, p2){
    Math.atan(slope(p1, p2));
}