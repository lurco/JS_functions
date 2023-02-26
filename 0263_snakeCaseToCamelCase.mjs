import {capitalizeFirstLetter} from "./0264_capitalizeFirstLetter.mjs";
import {decapitalizeFirstLetter} from "./0265_decapitalizeFirstLetter.mjs";

export function snakeCaseToCamelCase(str){
    const result = str
        .split('_')
        .map((word) => capitalizeFirstLetter(word))
        .join('');

    return decapitalizeFirstLetter(result);
}
