export function expectedValue(ar){
    return ar.reduce((acc, ce) => acc + ce) / ar.length;
}
