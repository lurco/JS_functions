export function upMajorSecond(startingNote){
    const whiteKeys = 'fcgdaeb'.split('');
    let cycle = 0;
    let arg = startingNote.split('');

    while(arg.length > 1 && arg.slice(-1).some((i) => ['#', 'b'].includes(i)) ){
        if(arg.slice(-1)[0] === 'b'){
            cycle--;
            arg.splice(-1, 1);
        } else if(arg.slice(-1)[0] === '#'){
            cycle++;
            arg.splice(-1, 1);
        }
    }

    const index = (whiteKeys.indexOf(arg.join('')) + 2);
    cycle += Math.floor(index / whiteKeys.length);

    return whiteKeys[index % whiteKeys.length].concat(cycle > 0 ? '#'.repeat(Math.abs(cycle)) : 'b'.repeat(Math.abs(cycle)));
}
