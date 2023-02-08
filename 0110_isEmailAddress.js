export function isEmailAddress(s){
    return /^[\w+]+@([\w^_]+\.)[\w^_]+$/i.test(s);
}