function getArrayType(integers)
{
  let isEven = 0;
  let isOdd = 0;
  for (var i = 0; i != 3; i++)
  {
    if (isEvenNumber(integers[i]))
    {
      isEven++;
    }
    else
    {
      isOdd++;
    }
  }
  if (isEven > isOdd)
  {
    return 1
  }
  return 0
}

function isEvenNumber(number)
{
  if (number == 0)
    return 1
  return (number % 2 == 0)
}

function findOutlier(integers){
  let isEven = getArrayType(integers)
  let result = NaN;
  
  integers.forEach(number => {
    if (isEven ? !isEvenNumber(number) : isEvenNumber(number))
    {
      result = number;
    }
  })
  return result
}