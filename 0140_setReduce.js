export function setReducer(input) {
    const repeated = {bool: false, count: 0};

    function reduce(input){
        const result = input.map((num, i) => {
            if (repeated.bool === true && input[i + 1] === num) {
                repeated.count++;
                return '';
            } else if (repeated.bool === true && input[i + 1] !== num) {
                repeated.bool = false;
                return 'repeated.count';
            } else if (repeated.bool === false && input[i + 1] === num) {
                repeated.bool = true;
                repeated.count = 1;
                return 'repeated.count';
            } else if (repeated.bool === false && input[i + 1] !== num) {
                repeated.count = 1;
                return '';
            }
        });
        return reduce(result.filter((char) => char !== ''));
    }

    return reduce(input).flat();
}