export function slope(p1, p2){
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[0];

    return dx / dy;
}