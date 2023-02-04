export function shortcut(string){
  const removalList = ['a', 'e', 'i', 'o', 'u'];
  return string.split('').filter((char) => ! removalList.includes(char)).join('');
}
