export function velocity(tk, t0 = 0, a = 0, v0 = 0){
    return v0 + (tk - t0) * a;
}