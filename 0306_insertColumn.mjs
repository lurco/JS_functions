import {displayMatrix} from "./0298_displayMatrix.mjs";
import {range} from "./0131_range.mjs";
import {createSampleMatrix} from "./0299_createSampleMatrix.mjs";
import {pushColumn} from "./0303_pushColumn.mjs";

export function insertColumn(column, matrix, n = 'push'){

    if(n === 'push'){
        return pushColumn(column, matrix);
    }

    const resultMatrix = JSON.parse(JSON.stringify(matrix));

    return resultMatrix.map((row, i) => {
        row.splice(n, 0, column[i]);
        return row;
    });
}
