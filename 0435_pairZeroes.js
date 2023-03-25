export function pairZeros(arr) {
    let paired = true;

    arr.forEach((char, i) => {
        if(paired === true && char === 0){
            paired = false;
        } else if(paired === false && char === 0){
            arr[i] = 'TBR';
            paired = true;
        }
    })

    return arr.filter((item) => item !== 'TBR');
}