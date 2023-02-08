export function clock12to24(string12){
    const isPM = /p\.?m\.?/.test(string12.toLowerCase());
    let array12 = JSON.parse(JSON.stringify((string12.split(/:|\s+/))));

    array12[0] = isPM ? (parseInt(array12[0]) + 12) % 24 : array12[0];

    return array12.slice(0, 3).join(':');
}
