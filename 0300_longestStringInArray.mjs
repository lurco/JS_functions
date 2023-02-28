export function longestStringInArray(ar){
    const lens = ar.flat().map(el => el.toString().length);

    return Math.max(...lens);
}
