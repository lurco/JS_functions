export function timeCorrect(timestring) {
    if (timestring === '') {
        return '';
    }
    if (!/^\d\d:\d\d:\d\d$/g.test(timestring)) {
        return null;
    }
    let overflow = 0;
    let limit = 60;

    return timestring
        .split(':')
        .reverse()
        .map((time, i) => {
            limit = i === 2 ? 24 : 60;
            time = parseInt(time) + overflow;
            if (time > limit) {
                overflow = Math.floor(time / limit);
            }
            return (time % limit).toString().padStart(2, '0');
        })
        .reverse()
        .join(':');
}

console.log(timeCorrect("14:107:05"))