export async function getPapHeadline(signal){
    const response = await fetch('https://www.pap.pl/').catch(console.log);

    return response;
}

console.log(await getPapHeadline())