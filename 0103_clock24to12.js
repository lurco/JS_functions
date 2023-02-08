export function clock24to12(string24){
    const array24 = string24.split(':');
    array24[0] %= 12;

    return array24.join(':');
}