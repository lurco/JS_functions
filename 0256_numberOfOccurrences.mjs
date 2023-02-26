Object.defineProperty(Array.prototype, 'numberOfOccurrences',{
    value : function numberOfOccurrences(element) {
        let result = 0;

        this.forEach((item) => {
            if(item === element){ result++}
        });

        return result;
    }
});