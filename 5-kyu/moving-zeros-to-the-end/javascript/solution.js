var moveZeros = function (arr) {
  var zeroCount = 0
  let newArr = []
  arr.forEach(element => {
    if (element === 0)
    {
      zeroCount++;
    }
    else
    {
      newArr.push(element)
    }
  })
  for (var i = 0; i < zeroCount; i++)
  {
    newArr.push(0)
  }
  return newArr
}