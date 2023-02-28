import {matrixMinor} from "./0286_matrixMinor.mjs";

export function matrixAlgebraicCofactor(i, j, matrix){
    return matrixMinor(i, j, matrix.map((row, i) => row.map((element, j) => Math.pow(-1, i + j) * element )));
}
