let iteration = -1
function multiply(multiplier, before) {
  return multiplier * before
}
function multiplicatePersistence(num) {
  if (num.length == 1)
  {
    return num;
  }
  iteration++;
  return multiplicatePersistence([...String(num)].reduce(multiply))
}
function persistence(num) {
   iteration = -1
   multiplicatePersistence(num)
   return iteration
}