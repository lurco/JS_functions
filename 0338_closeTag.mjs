export function closeTag(str){
    const tag = str.match(/(<[a-zA-Z]*>)/g)[0];

    return str + tag[0] + '\\' + tag.slice(1);
}


