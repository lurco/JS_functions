import {modulus} from "./0322_modulus.mjs";
import {argumentComplexNumber} from "./0327_argumentComplexNumber.mjs";

export function cartesianToPolarComplexNumber(z){
    return {modulus: modulus(z), argument: argumentComplexNumber(z)};
}
