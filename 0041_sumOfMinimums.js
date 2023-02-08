export function sumOfMinimums(arr) {
  return arr.map((row) => Math.min(...row)).reduce((acc, ce) => acc + ce);
}
