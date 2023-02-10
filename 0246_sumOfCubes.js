export function sumCubes(n){
    let result = 0;

    for(let i = 1; i < n+1; i++){
        result += (i*i*i);
    }

    return result;
}