import {scalarProduct} from "./0075_scalarProduct.js";

export function vectorLength(a){
    return Math.sqrt(scalarProduct(a, a));
}

