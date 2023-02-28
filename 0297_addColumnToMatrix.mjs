import {getColumnFromMatrix} from "./0296_getColumnFromMatrix.mjs";
import {replaceMatrixColumn} from "./0291_replaceMatrixColumn.mjs";

export function addColumnToMatrix(n, columnToAdd, matrix, multiplier = 1){
    const newColumn = getColumnFromMatrix(n, matrix).map((element, i) => element + columnToAdd[i] * multiplier);

    return replaceMatrixColumn(n, newColumn, matrix);
}
