import {scalarProduct} from "./0075_scalarProduct.js";

export function matrixProduct(A, B){
    return Array.isArray(A[0]) ?
        A.map((p, j) => B[0].map((p, k) => A[j].reduce((acc, ce, i) => acc + ce * B[i][k], 0))) :
        scalarProduct(A, B);
}
