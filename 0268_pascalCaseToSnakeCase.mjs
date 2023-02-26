import {decapitalizeFirstLetter} from "./0265_decapitalizeFirstLetter.mjs";

export function pascalCaseToSnakeCase(str){
    return decapitalizeFirstLetter(str)
        .replaceAll(/([A-Z])/g,(s) => '_' + s.toLowerCase());
}

console.log(pascalCaseToSnakeCase('JestemMalyGosc'))