export function countWhitespaces(s){
    return s.split(/\S+/).join('').length;
}