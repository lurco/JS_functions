function trim(s, max){
    let end = '';
    if(max > 3 && s.length > max) {
        end = '...';
        max -= 3;
    } else if(s.length > max){
        end = '...';
    }

    return s.slice(0, max) + end;
}