export function capitalizeWords(string){
    const regex = /([^a-zA-Z])([a-z])(?=[a-zA-Z]+)/g;
    const f = (string) => string.toUpperCase();
    return string.replaceAll(regex, f);
}