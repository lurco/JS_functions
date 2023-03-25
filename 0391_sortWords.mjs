export function sortWords(str){
    return str.split(' ').sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt()).join(' ');
}
