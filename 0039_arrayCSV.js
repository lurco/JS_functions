export function toCsvText(array) {
   return array.map((row) => row.join(',')).join('\n');
}
