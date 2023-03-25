export function polarToCartesianComplexNumber(z){
    return {
        real: z.modulus * Math.cos(z.argument),
        imaginary: z.modulus * Math.sin(z.argument)
    };
}
