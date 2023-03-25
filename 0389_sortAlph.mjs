export function sortAlph(str){
    return str.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
}
