export function intertwinePwd(word, date){
    if(word.length === 0 || date.length === 0){
        return undefined;
    }
    else if(word.length === date.length){
        return word.split('').map((char, i) => char + date[i]).join('');
    } else if(word.length > date.length){
        return date.split('').map((number, i) => word[i] + number).join('') + word.slice(date.length);
    } else if(word.length < date.length){
        return word.split('').map((char, i) => date[i] + char).join('') + date.slice(word.length);
    }
}
