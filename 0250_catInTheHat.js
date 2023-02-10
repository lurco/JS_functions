export function height(n) {
    const h0 = 2000000;

    return (h0 * (1 - .4 ** (n+1)) / (1 - .4)).toFixed(3);
}
