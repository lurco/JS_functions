export function camelCaseToSnakeCase(str){
    return str.replaceAll(/([A-Z])/g, (s) => '_' + s.toLowerCase());
}
