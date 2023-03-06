export function* generator(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}