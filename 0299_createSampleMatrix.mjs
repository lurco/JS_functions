import {range} from "./0131_range.mjs";

export function createSampleMatrix(n, m = n){
    return range(0, n * m, m).map(row => range(row + 1, row + m + 1));
}
