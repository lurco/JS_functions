export function upHalfTone(tone){
    return tone.slice(-1) === 'b' ? tone.slice(0, -1) : tone + '#';
}