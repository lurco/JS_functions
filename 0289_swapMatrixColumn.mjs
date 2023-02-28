export function swapMatrixColumn(i, j, matrix) {
    return matrix.map((row) => {
         return row.map((element, n) => {
            if(n === i){
                return row[j];
            } else if(n === j){
                return row[i];
            } else {
                return element;
            }
        })
    })
}

console.log(swapMatrixColumn(1, 2, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));