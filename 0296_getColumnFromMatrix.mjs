export function getColumnFromMatrix(n, matrix){
    return matrix.map((row, i) => row[n]);
}
