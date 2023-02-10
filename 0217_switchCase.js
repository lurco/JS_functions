String.prototype.switchCase = function (){
    return this.split('').map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}