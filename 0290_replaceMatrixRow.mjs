export function replaceMatrixRow(i, givenRow, matrix){
    return matrix.map((row, n) => n === i ? givenRow : row);
}
