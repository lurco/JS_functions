import {matrixDeterminant} from "./0285_matrixDeterminant.mjs";
import {replaceMatrixColumn} from "./0291_replaceMatrixColumn.mjs";

export function cramerRule(matrixA, columnB){
    const results = [];

        const detA = matrixDeterminant(matrixA);
    try {
        if(detA === 0) throw new Error("The provided system of equations is not Cramerian! (The main matrix' determinant is 0)");
    } catch(err){
        console.log(err)
    }

    columnB.forEach((el, i) => {
        results.push(matrixDeterminant(replaceMatrixColumn(i, columnB, matrixA)) / detA);
    })

    return results;
}
