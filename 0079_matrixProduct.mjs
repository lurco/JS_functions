import {scalarProduct} from "./0075_scalarProduct.mjs";

export function matrixProduct(A, B) {

    if (Array.isArray(B[0])) {
        return Array.isArray(A[0]) ?
            A.map((p, j) => B[0].map((p, k) => A[j].reduce((acc, ce, i) => acc + ce * B[i][k], 0))) :
            scalarProduct(A, B);
    } else {
        return Array.isArray(A[0]) ?
            A.map((p, j) => A[j].reduce((acc, ce, i) => acc + ce * B[i], 0)) :
            scalarProduct(A, B);
    }
}
