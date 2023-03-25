export function multiplyComplexNumber(x, y){
    return {
        real: x.real * y.real - x.imaginary * y.imaginary,
        imaginary: x.real * y.imaginary + x.imaginary * y.real
    };
}
