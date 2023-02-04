export function mango(quantity, price){
  const freeQuantity = Math.floor(quantity / 3);
  return price * (quantity - freeQuantity);
}
