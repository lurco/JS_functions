import {scalarProduct} from "./0075_scalarProduct.mjs";

export function vectorLength(a){
    return Math.sqrt(scalarProduct(a, a));
}

