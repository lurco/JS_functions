export function power(base, exp){
  let result = base;
  for(let i = 2; i <= exp; i++){
    result *= base;
  }
  return result;
}
