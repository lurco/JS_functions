export function reverseWords(str){
  return str.split(' ').map((item) => item.split('').reverse().join('')).join(' ');
}
