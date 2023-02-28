export const removeConsecutiveDuplicates = s => {
    const wordArray = s.split(' ').map((word, i, ar) => {
        if(i === 0){
            return word;
        } else {
            return word === ar[i - 1] ? '' : word;
        }
    });

    return wordArray.filter((item) => item !== '').join(' ');
}
