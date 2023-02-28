import {replaceMatrixColumn} from "./0291_replaceMatrixColumn.mjs";
import {matrixDeterminant} from "./0285_matrixDeterminant.mjs";
import {cramerRule} from "./0292_cramerRule.mjs";

export function determinantMethod(matrixA, columnB) {

    if (matrixDeterminant(matrixA) === 0) {
        const dets = [];
        columnB.forEach((el, i) => {
            dets.push(matrixDeterminant(replaceMatrixColumn(i, columnB, matrixA)));
        });

        if(dets.filter((el) => el !== 0).length === 0){
            return 'Indeterminate system - infinity solutions!'
        } else {
            return 'Contradictory system - no solutions exist!'
        }
    } else {
        return cramerRule(matrixA, columnB);
    }
}
