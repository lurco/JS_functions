export function zeroMatrix(n) {
    const result = [];

    for(let i = 0; i < n; i++){
        result.push([]);
        for(let j = 0; j < n; j++){
            result[i].push(0);
        }
    }

    return result;
}