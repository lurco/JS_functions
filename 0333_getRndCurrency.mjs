import {rndArrayItem} from "./0334_rndArrayItem.mjs";

export function getRndCurrency(){
    const currencies = '$,€,zł,yen,£'.split(',');

    return rndArrayItem(currencies);
}