import {pushRow} from "./0302_pushRow.mjs";

export function insertRow(row, matrix, n = 'push'){
    if(n === 'push'){
        return pushRow(row, matrix);
    }

    const resultMatrix = JSON.parse(JSON.stringify(matrix));
    resultMatrix.splice(n, 0, row);
    return resultMatrix;
}

