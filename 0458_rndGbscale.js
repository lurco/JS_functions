import {rand} from "./0142_randomsFromArray.mjs";

export function rndGbscale(){
    const scale = ['gb', 'ab', 'bb', 'cb', 'db', 'eb', 'f'];

    return rand(scale)[0];
}