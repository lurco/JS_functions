import {insertColumn} from "./0306_insertColumn.mjs";
import {addRowToMatrix} from "./0294_addRowToMatrix.mjs";
import {matrixProduct} from "./0079_matrixProduct.mjs";
import {matrixSubtraction} from "./0082_matrixSubtraction.mjs";

export function gaussianSLEbasic(matrixA, columnB){
    let augMatrix = insertColumn(columnB, matrixA);
    matrixA[0].forEach((col, j) => {
        columnB.forEach((el, i) => {
            if (i > j) {
                augMatrix = addRowToMatrix(i, augMatrix[j], augMatrix, - augMatrix[i][j] / augMatrix[j][j]);
            }
        })
    })

for(let j = matrixA.length - 1; j > 0; j--){
    for(let i = columnB.length - 1; i >= 0; i--){
        if(i < j){
            augMatrix = addRowToMatrix(i, augMatrix[j], augMatrix, -augMatrix[i][j] / augMatrix[j][j]);
        }
    }
}

    return augMatrix.map((row, i) => row.at(-1) / row[i]);
}
