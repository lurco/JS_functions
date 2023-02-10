export function downHalfTone(tone){
    return tone.slice(-1) === '#' ? tone.slice(0, -1) : tone.concat('b');
}
