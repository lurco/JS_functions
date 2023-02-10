export function downMajorSecond(startingNote){
    const whiteKeys = 'fcgdaeb'.split('');
    let cycle = 0;

    const index = whiteKeys.indexOf(startingNote) - 2;
    cycle = Math.floor(index / whiteKeys.length);

    return whiteKeys[Math.abs(index) % whiteKeys.length] + 'b'.repeat(Math.abs(cycle));
}