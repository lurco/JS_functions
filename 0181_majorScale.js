export function majorScale(key = 'c'){
    const accidentals = {'c': 0, 'g': 1, 'd': 2, 'a': 3, 'e': 4, 'b': 5, 'f#': 6, 'c#': 7,
                        'f': -1, 'bb': -2, 'eb': 3, 'ab': 4, 'db': 5, 'gb': 6, 'cb': 7};
    const whiteKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    const accidental = accidentals.key < 0 ? 'b' : '#';

    let scale = whiteKeys
        .map((tone, i) => whiteKeys[(whiteKeys.indexOf(key) + i) % whiteKeys.length]);

    if(accidentals.key < 0){
        return scale.map((t, i) => t.concat(t === accidental))
    }



    return scale;
}