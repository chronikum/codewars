function getSum( a,b )
{
  let counter = 0;
  if (a == b) return a;
  if(a < b){
    for (; a <= b; a++){
      counter += a;
    }
  } else if (a > b){
      for(; b <= a; b++){
        counter += b;
      }
  }
  return counter;
}