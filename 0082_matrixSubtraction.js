export function matrixSubtraction(A, B){
    return A.map((row, j) => row.map((el, k) => el - B[j][k]));
}
