import {majorScale} from "./0181_majorScale.mjs";
import {downHalfTone} from "./0214_downHalfTone.mjs";

export function semitoneInterval(note = 'c', semitones = 0) {
    const scaleIntervals = [0, 2, 4, 5, 7, 9, 11];

    const remainder = semitones % 12;

    if (scaleIntervals.includes(remainder)) {
        return majorScale(note)[scaleIntervals.indexOf(remainder)];
    } else {
        return downHalfTone(majorScale(note)[scaleIntervals.indexOf(remainder + 1)]);
    }
}

