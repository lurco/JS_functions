export function covfefe(str){
    return str.replaceAll('coverage', 'covfefe').concat(str.includes('coverage') ? '' : ' covfefe');
}