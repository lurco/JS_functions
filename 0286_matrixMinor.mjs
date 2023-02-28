export function matrixMinor(i, j, matrix){
    let tempMatrix = JSON.parse(JSON.stringify(matrix));

    tempMatrix.splice(i, 1);
    for (let row of tempMatrix){
        row.splice(j, 1);
    }

    return tempMatrix;
}

