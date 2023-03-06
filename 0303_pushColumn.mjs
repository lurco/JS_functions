export function pushColumn(column, matrix){
    const resultMatrix = JSON.parse(JSON.stringify(matrix));

    return resultMatrix.map((row, i) => {
        row.push(column[i]);
        return row;
    });
}
