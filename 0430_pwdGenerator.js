import {range} from "./0131_range.mjs";

export function pwdGenerator(length = 8) {
    const lowercase = [];
    const uppercase = [];
    const numbers = range(10);
    const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
        '-', '_', '=', '+', '`', '~', '{', '[', ']', '}', ']', ';', ':',
        '\'', '"', '\\', '|', ',', '<', '.', '>', '/', '?'];
    const result = [];

    for(let i = 'A'.charCodeAt(0); i < 'Z'.charCodeAt(0) + 1; i++){
        uppercase.push(String.fromCharCode(i));
        lowercase.push(String.fromCharCode(i + 32));
    }

    for(let i = 0; i < length; i++) {
        const type = Math.floor(Math.random() * 4);
        if(type === 0) {
            result.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
        } else if(type === 1) {
            result.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
        } else if(type === 2){
            result.push(numbers[Math.floor(Math.random() * numbers.length)]);
        } else if(type === 3){
            result.push(specials[Math.floor(Math.random() * specials.length)])
        }
    }

    return result.join('');
}