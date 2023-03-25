export function countCapitals(s){
    return s.match(/[A-ZĄĘĆŻŹÓŁŚŃ]/g).length;
}