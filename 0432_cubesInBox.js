export function cubesInBox(x,y,z){
    const dim = [x, y, z].sort((a, b) => a - b);
    let result = 0;

    for(let i = 1; i < dim[0] + 1; i++){
        result += (dim[0] - i + 1) * (dim[1] - i + 1) * (dim[2] - i + 1);
    }

    return result;
}