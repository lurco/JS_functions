import {matrixAlgebraicCofactor} from "./0287_matrixAlgebraicCofactor.mjs";

export function matrixDeterminant(matrix) {

    let result = 0;

    if (matrix.length > 1) {
        matrix[0].forEach((element, j) => {
            result += element * matrixDeterminant(matrixAlgebraicCofactor(0, j, matrix));
        })
    } else {
        return matrix.flat()[0];
    }

    return result;
}
