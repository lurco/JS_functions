import {pushRow} from "./0302_pushRow.mjs";
import {displayMatrix} from "./0298_displayMatrix.mjs";
import {createSampleMatrix} from "./0299_createSampleMatrix.mjs";
import {range} from "./0131_range.mjs";

export function insertRow(row, matrix, n = 'push'){
    if(n === 'push'){
        return pushRow(row, matrix);
    }

    return matrix.splice(n, 0, row);
}


console.log(pushRow([0, 1], [[3, 4], [5, 6]]));