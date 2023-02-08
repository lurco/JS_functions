export function sqrt(number){
  let result = number / 2;

  while(Math.abs(result ** 2 - number) > .001){
    result = (number / result + result) / 2;
  }

  return result;
}
