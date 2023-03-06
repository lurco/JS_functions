export function pushRow(row, matrix){
    const resultMatrix = JSON.parse(JSON.stringify(matrix));
    resultMatrix.push(row);
    return resultMatrix;
}
