import {factorial} from './0073_factorial.js'

export function sin(x){
  let result = x;

  for(let i = 1; Math.abs(x**(2*i + 1) / factorial(i + 1)) > .01; i++){
    result += (-1)**i * x**(2*i + 1) / factorial(i + 1);
  }
  return result;
}

