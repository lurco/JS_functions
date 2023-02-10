export function quadraticEq(a = 1, b = 0, c = 0){
    const D = b ** 2 - 4 * a * c;

    if(D > 0) {
        const sqrtD = Math.sqrt(D);
        return [ (- b + sqrtD) / (2 * a), (- b - sqrtD) / (2 * a) ];
    } else if(D === 0){
        return - b / (2 * a);
    } else{
        return null;
    }
}