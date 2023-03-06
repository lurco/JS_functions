export function scalarProduct(a, b){
    return a.map((coord, i) => coord * b[i]).reduce((acc, ce) => acc + ce);
}