export function isPythagoreanTriple(integers) {
  return 2 * Math.max(...integers) ** 2 - integers.map((num) => num ** 2).reduce((acc, ce) => acc + ce) === 0;
 
