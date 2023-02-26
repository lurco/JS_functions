function recursiveSumSubtraction(num){
    if(num > 100){
        return recursiveSumSubtraction(num - num.toString().split('').reduce((acc, ce) => acc + parseInt(ce), 0))
    } else {
        return num;
    }
}
