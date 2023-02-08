export function integralTrapezoidal(a, b, f, N){
  const dx = (b - a) / N;
  let int = 0;

  for (let i = 0; i < N; i++){
    int += dx * (f(a + dx * i) + f(a + dx * (i + 1))) / 2;
  }

  return int;
}
