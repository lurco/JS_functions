export function capitalizationAfterPeriod(string){
    return string.replaceAll(/(?<=[.!?]\s)[a-ząćóężźńśł]|^[a-ząćóężźńśł]/g, (char) => char.toUpperCase());
}