export var countSquares = function(cuts){
  return cuts === 0 ? 1 : 6 * cuts ** 2 + 2;
}
