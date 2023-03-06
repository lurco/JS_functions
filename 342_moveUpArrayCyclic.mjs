export function moveUpArrayCyclic(arr, start, jump = 0){
    let result = null;

    if(jump === 0){
        jump = start;
        start = 0;
    }

    try{
        result = arr[(start + jump) % arr.length];
    } catch (error){
        console.log(error.message);
    }

    return result;
}
