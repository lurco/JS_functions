import {decapitalizeFirstLetter} from "./0265_decapitalizeFirstLetter.mjs";

export function camelCaseToPascalCase(str){
    return decapitalizeFirstLetter(str).replaceAll(/([A-Z])/g, (s) => '-' + s.toLowerCase());
}
