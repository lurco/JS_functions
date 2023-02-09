export function range(start, stop, step = 1) {
    if (step === 0){
        return -1;
    } else if (stop === undefined) {
        stop = start;
        start = 0;
    }

    const result = [];

    for (let i = start; i < stop; i += step) {
        result.push(i);
    }

    return result;
}