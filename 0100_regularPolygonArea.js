import {cot} from "./0102_cot.js";

export function regularPolygonArea(n, a = 1){
    if(n < 3){
        console.error('A polygon needs at least 3 sides Man...')
    }

    const angle = Math.PI / n;

    return n/4 * a*a * cot(angle);
}
