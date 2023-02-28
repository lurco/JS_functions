import {longestStringInArray} from "./0300_longestStringInArray.mjs";

export function displayMatrix(matrix){
const len = longestStringInArray(matrix);

    matrix.forEach(row => {
        console.log('[',...row.map((element) => element.toString() + ' '.repeat(len - element.toString().length)),']');
    })
}
