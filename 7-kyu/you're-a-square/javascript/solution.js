var isSquare = function(n){
  let i = 0;
  if (n < 0)
    return false
  if (n == 0)
    return true
  while ((n / 2) > i)
  {
    i++;
    if ((i * i) == n)
      return true
  }
  return false;
}