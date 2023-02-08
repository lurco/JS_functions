export function triangularNumber(n){
    return n === 1 ? 1 : triangularNumber(n - 1);
}