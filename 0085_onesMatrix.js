export function onesMatrix(n){
    const result = [];

    for(let i = 0; i < n; i++){
        result.push([]);
        for(let j = 0; j < n; j++){
            result[i].push(1);
        }
    }

    return result;
}