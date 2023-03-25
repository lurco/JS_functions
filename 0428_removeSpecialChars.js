export function removeSpecialChars(s){
    return s.replaceAll(/[^a-ząężźćółńś\s0-9]/gi, '');
}