export function to2D(n, size) {
    return [n % size[0], Math.floor(n / size[0])];
}