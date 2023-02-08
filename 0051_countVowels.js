export function countVowels(string){
  return string.split('').filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char)).length;
}
