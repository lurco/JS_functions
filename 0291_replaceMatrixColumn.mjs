export function replaceMatrixColumn(n, column, matrix){
    return matrix.map((row, i) => row.map((element, j) => n === j ? column[i] : element));
}
