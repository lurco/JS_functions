export function querySelectorToGetElement(query){
    if(query[0] === '.'){
        return 'getElementsByClassName';
    } else if(query[0] === '#'){
        return 'getElementById';
    } else if(/[a-zA-Z]/.test(query[0])){
        return 'getElementsByTagName';
    }
}
