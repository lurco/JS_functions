function setReducer(input) {
    function reduce(ar){
        let repeated = {bool: false, count: 1};

        let result = ar.map((char, i) => {

            if(repeated.bool === false){
                repeated.count = 1;
            }
            if(char === ar?.at(i + 1)){
                repeated.bool = true;
                repeated.count++;
                return '';
            } else if(char !== ar?.at(i+1)){
                repeated.bool = false;
                return repeated.count;
            }
        }).filter((item) => item !== '');

        return result.length === 1 ? result : reduce(result);
    }

    return reduce(input)[0];
}