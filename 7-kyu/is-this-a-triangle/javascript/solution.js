function isTriangle(a,b,c)
{
  if (a == 0 || b == 0 || c == 0)
  {
    console.log("One val is 0")
    return false;
  }
  if ((a + b <= c || a + c <= b || b + c <= a))
  {
    console.log("Nothing applies")
    return false;
  }
  return true;
}