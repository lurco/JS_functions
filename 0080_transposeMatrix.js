export function transposeMatrix(A){
    return Array.isArray(A[0]) ? A[0].map((col, i) => A.map((row) => row[i])) : A.map((el) => [el]);
}
