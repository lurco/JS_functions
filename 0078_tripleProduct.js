import {scalarProduct} from "./0075_scalarProduct.mjs";
import {vectorProduct3D} from "./0077_vectorProduct3D.js";

export function tripleProduct(a, b, c){
    return scalarProduct(vectorProduct3D(a, b), c);
}
