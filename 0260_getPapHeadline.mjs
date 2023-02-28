export async function getPapHeadline(signal){
    return await fetch('https://www.pap.pl/').catch(console.log);
}
window.getPapHeadline = () => getPapHeadline;