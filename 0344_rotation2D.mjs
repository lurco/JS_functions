export function rotation2D(P, a){
  const [x, y] = P;

  return [x * Math.cos(a) + y * Math.sin(a), y * Math.cos(a) - x * Math.sin(a) ];
}

