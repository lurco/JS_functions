export function fifo(n, referenceList) {
    const result = [];
    let first = null;
    let cycle = 0;

    for (let page of referenceList){

        if(!result.includes(page)){
            if(result.length < n){
                result.push(page);
            } else {
                result.splice(0, 1);
                cycle++;
                result.push(page);
            }
        }
    }

    while(result.length < n){
        result.push(-1);
    }

    return result.map((item, i, ar) => ar[(i + 100*n - cycle) % n]);
}
