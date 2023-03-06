import {padWithZeroes} from "./0311_padWithZeroes.mjs";

export function todayToYYYYMMDD(){
    const today = new Date();

    const [
        year,
        month,
        day
    ] = [
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
    ];

    return `${year}-${padWithZeroes(month)}-${padWithZeroes(day)}`;
}
