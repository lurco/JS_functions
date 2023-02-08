export function properCapitalization(string){
    return string.replaceAll(/[\wżźćńółęąśŻŹĆĄŚĘŁÓŃ]+/gi, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
}