import {upMajorSecond} from "./0213_upMajorSecond.mjs";
import {downHalfTone} from "./0214_downHalfTone.mjs";

export function majorScale(key = 'c'){
    const scaleRecipe = [2, 2, 1, 2, 2, 2];

    const result = [key];
    scaleRecipe.forEach((interval, i) => {
        result.push(interval === 2 ? upMajorSecond(result[i]) : downHalfTone(upMajorSecond(result[i])));
    })

    return result;
}

