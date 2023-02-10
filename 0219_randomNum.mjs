export function randomNum(start = 0, stop = 'None'){
    if(stop === 'None'){
        stop = start;
        start = 0;
    }

    return Math.floor(Math.random() * (stop - start)) + start;
}