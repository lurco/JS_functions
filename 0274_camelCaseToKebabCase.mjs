export function camelCaseToKebabCase(str){
    return str.replaceAll(/([A-Z])/g, (match) => '-' + match.toLowerCase());
}
