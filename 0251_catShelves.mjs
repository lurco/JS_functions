export function catShelves(start, finish){
    const steps = finish - start;
    return Math.floor(steps / 3) + steps % 3;
}