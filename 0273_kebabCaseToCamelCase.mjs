export function kebabCaseToCamelCase(str){
    return str.replaceAll(/-([\w\d])/g, (match, capture) => capture.toUpperCase());
}
