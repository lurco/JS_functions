export function countsSpecialChars(s){
    return s.match(/[^a-z0-9\s]/gi).length;
}