import {upMajorSecond} from "./0213_upMajorSecond.mjs";
import {downHalfTone} from "./0214_downHalfTone.mjs";

export function majorScale(key = 'c'){
    // const whiteKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    const scaleRecipe = [2, 2, 1, 2, 2, 2];
    //
    // const result = cycleArray(whiteKeys, whiteKeys.indexOf(key));

    const result = [key];
    scaleRecipe.forEach((interval, i) => {
        result.push(interval === 2 ? upMajorSecond(result[i]) : downHalfTone(upMajorSecond(result[i])));
    })

    return result;
}

console.log(majorScale('db'));
