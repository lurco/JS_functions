export function isPalindrome(x) {
  const xLowCase = x.toLowerCase();
  return xLowCase.split('').reverse().filter((char, i) => char !== xLowCase[i]).length === 0;
}
