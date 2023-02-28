export function pushRow(row, matrix){
    const resultMatrix = JSON.parse(JSON.stringify(matrix));
    return resultMatrix.push(row);
}
