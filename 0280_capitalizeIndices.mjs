export function capitalize(s, arr){
    return s.split('').map((char, i) => arr.includes(i) ? char.toUpperCase() : char).join('');
};