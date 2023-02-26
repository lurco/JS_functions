import {semitoneInterval} from "./0254_semitoneInterval.mjs";
import {intervalLength} from "./0257_intervalLength.mjs";

export function namedInterval(key = 'c', name = 'P1'){
    return semitoneInterval(key, intervalLength(name));
}
