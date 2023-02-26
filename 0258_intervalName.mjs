export function intervalName(semitones){
    const intervalNamesStr = 'P1,m2,M2,m3,M3,P4,d5,P5,m6,M7,m7,M7,P8';

    return intervalNamesStr[semitones % 12];
}