export function convertToArray(hash){
    return Object.entries(hash).sort((a, b) => (a > b) ? 1 : -1);
}