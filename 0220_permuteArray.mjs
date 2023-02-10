import {permute} from "./0221_permute.mjs";

export function permuteArray(arr){
    const newOrder = permute(arr.length);

    return arr.map((item, i) => arr[newOrder[i] - 1]);
}

console.log(permuteArray('qwertyyasdfgghjkzfb'.split('')));