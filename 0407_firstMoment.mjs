export function firstMoment(ar){
    return ar.map((item) => item * 1 / ar.length).reduce((acc, ce) => acc + ce);
}
