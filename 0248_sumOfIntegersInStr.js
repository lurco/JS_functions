export const sumOfIntegersInString = (s) => {
    arr = s.match(/\d+/g);
    return arr == null ? 0 : arr.map((i) => parseInt(i)).reduce((acc, ce) => acc + ce);
};