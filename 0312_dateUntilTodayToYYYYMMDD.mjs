import {padWithZeroes} from "./0311_padWithZeroes.mjs";

export function dateUntilTodayToYYYYMMDD(num = 0){
    const date = new Date();
    date.setDate(date.getDate() - num);
    const [
        year,
        month,
        day
    ] = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ];

    return `${year}-${padWithZeroes(month)}-${padWithZeroes(day)}`
}
