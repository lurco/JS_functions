export function findMultiples(integer, limit) {
  const result = [];
  for(let multi = integer; multi <= limit; multi += integer){
    result.push(multi);
  }
  return result;
}

