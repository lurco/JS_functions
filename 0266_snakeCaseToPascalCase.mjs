import {snakeCaseToCamelCase} from "./0263_snakeCaseToCamelCase.mjs";
import {capitalizeFirstLetter} from "./0264_capitalizeFirstLetter.mjs";

export function snakeCaseToPascalCase(str){
    return capitalizeFirstLetter(snakeCaseToCamelCase(str));
}