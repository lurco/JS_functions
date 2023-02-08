export function integralRiemann(a, b, f, N){
  let int = 0;
  const dx = (b - a) / N;

  for(let i = 0; i < N; i++){
    int += dx * f(a + i * dx);
  }

  return int;
}
