import {majorScale} from "./0181_majorScale.mjs";
import {moveUpArrayCyclic} from "./0342_moveUpArrayCyclic.mjs";

export function getChord(root = 'c', type = 3) {
    const scale = majorScale(root);
    const result = [];

    for (let i = 0; i < type; i++) {
        result.push(moveUpArrayCyclic(scale, scale.indexOf(root), 2 * i));
    }

    return result;
}
