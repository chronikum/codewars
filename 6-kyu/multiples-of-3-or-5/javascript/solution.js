function solution(number){
  let sumAllNumbers = 0;
  let counter = 0;
  if (number < 0)
    return 0
  while (counter < number)
  {
    if (counter % 3 == 0 || counter % 5 == 0)
      sumAllNumbers += counter;
    counter++;
  }
  return sumAllNumbers
}