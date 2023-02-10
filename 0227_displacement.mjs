export function displacement(tk, t0 = 0, a = 0, v0 = 0, x0 = 0){
    return x0 + v0 * (tk - t0) + a / 2 * (tk - t0) ** 2;
}