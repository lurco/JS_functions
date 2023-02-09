export function triangularNumber(n){
    return n === 1 ? 1 : n + triangularNumber(n - 1);
}