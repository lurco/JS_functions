import {rndArrayItem} from "./334_rndArrayItem.mjs";

export function getRndCurrency(){
    const currencies = '$,€,zł,yen,£'.split(',');

    return rndArrayItem(currencies);
}