import {capitalizeFirstLetter} from "./0264_capitalizeFirstLetter.mjs";

export function kebabCaseToPascalCase(str){
    return capitalizeFirstLetter(str.replaceAll(/-([\w\d])/g, (s,t) => t.toUpperCase()));
}
