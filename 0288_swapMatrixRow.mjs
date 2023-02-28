export function swapMatrixRow(i, j, matrix){
    return matrix.map((row, n) => {
        if(n === i){
            return matrix[j];
        } else if(n === j){
            return matrix[i];
        } else {
            return row;
        }
    })
}
