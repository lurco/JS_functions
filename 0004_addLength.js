export function addLength(str) {
  str.split(' ').map((item) => item + ' ' + item.length);
}

