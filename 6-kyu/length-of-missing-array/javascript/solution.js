function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.includes(null) || arrayOfArrays.filter(array => array.length == 0).length > 0)
  {
    return 0
  }
  arrayOfArrays.sort((a, b) => a.length - b.length);
  arrayOfArrays = arrayOfArrays.map(a => parseInt(a.length));
  for (let index = 0; index < arrayOfArrays.length; index++)
  {
    if ((arrayOfArrays[index] + 1) != arrayOfArrays[index + 1])
    {
      return (arrayOfArrays[index] + 1)
    }
  }
  return 0;
}
