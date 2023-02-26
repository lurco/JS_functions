export function stringAnalysis(s){
    const result = [0, 0, 0, 0];
    const sAr = s.split('');


    for(let char of sAr) {
        if(char.match(/[\W_]/)){
            result[3]++;
        } else if(char.match(/\d/)){
            result[2]++;
        } else if(char.toLowerCase() === char){
            result[1]++;
        } else if(char.toUpperCase() === char){
            result[0]++;
        }
    }

    return result;
}