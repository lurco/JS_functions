export function sortRevAlph(str){
    return str.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
}
