export function countCharsNoSpaces(s){
    return s.split(/\s+/).join('').length;
}