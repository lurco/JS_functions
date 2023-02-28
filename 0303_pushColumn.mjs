export function pushColumn(column, matrix){
    return matrix.map((row, i) => row.push(column[i]));
}
