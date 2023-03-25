export function spiralingBox(m, n){
    const result = [];

    for(let i = 0; i < n; i++){
        result.push([]);
        for(let j = 0; j < m; j++){
            result[i].push(1);
        }
    }
    for(let k = 0; k < Math.max(n, m); k++){
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                result[i][j] += (i > k && i < n - k - 1 && j > k && j < m - k - 1) ? 1 : 0;
            }
        }
    }

    return result;
}

spiralingBox(2, 2)