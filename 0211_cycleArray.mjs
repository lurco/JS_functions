export function cycleArray(ar, n = 0){
    return ar.map((item, i) => ar[(i + n) % ar.length]);
}