import {areEqualArrays} from "./324_areEqualArrays.mjs";
import {modulusComplexNumber} from "./317_modulusComplexNumber.mjs";

export function modulus(number){
    try{
        if(typeof number === 'number'){
            return Math.abs(number);
        } else if(areEqualArrays(['real', 'imaginary'], Object.keys(number))){
            return modulusComplexNumber(number);
        } else if(areEqualArrays(['modulus', 'argument'], Object.keys(number))){
            return number.modulus;
        } else{
            throw new Error("not a valid number!");
        }
    } catch (error){
        console.log(`Invalid input - ${error.name}: ${error.message}`);
        return 'No output could be generated, exiting...';
    }
}
