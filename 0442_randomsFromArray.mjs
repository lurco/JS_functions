export function rand(ar, n = 1){
    const result = [];

    for(let i = 0; i <= n; i++){
        result.push(ar[Math.floor(Math.random() * ar.length)]);
    }

    return result;
}