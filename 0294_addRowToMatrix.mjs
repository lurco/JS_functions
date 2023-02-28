import {getRowFromMatrix} from "./0295_getRowFromMatrix.mjs";
import {replaceMatrixRow} from "./0290_replaceMatrixRow.mjs";

export function addRowToMatrix(n, rowAdded, matrix, multiplier = 1){
    const newRow = getRowFromMatrix(n, matrix).map((element, i) => element + rowAdded[i] * multiplier);

    return replaceMatrixRow(n, newRow, matrix);
}
