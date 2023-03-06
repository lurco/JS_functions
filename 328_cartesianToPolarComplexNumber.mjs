import {modulus} from "./322_modulus.mjs";
import {argumentComplexNumber} from "./327_argumentComplexNumber.mjs";

export function cartesianToPolarComplexNumber(z){
    return {modulus: modulus(z), argument: argumentComplexNumber(z)};
}
