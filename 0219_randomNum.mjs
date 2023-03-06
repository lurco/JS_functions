export function randomNum(start = 0, stop = null){
    if(stop === null){
        stop = start;
        start = 0;
    }

    return Math.floor(Math.random() * (stop - start)) + start;
}