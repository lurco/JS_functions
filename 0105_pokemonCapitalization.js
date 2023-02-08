export function pokemonCapitalization(string){
    return string
        .toLowerCase()
        .split('')
        .map((char, i) => i % 2 ? char.toUpperCase() : char)
        .join('');
}