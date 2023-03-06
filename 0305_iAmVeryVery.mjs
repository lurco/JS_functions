function iam(input, n=0) {
    if(input !== undefined){
        return 'I am ' + 'very '.repeat(n) + input;
    }
    return (str) => iam(str, n+1);
}
