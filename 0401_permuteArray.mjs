export function permuteArray(ar){
    const order = permute(ar.length);

    return ar.map((item, i, array) => array[order[i] - 1]);
}
