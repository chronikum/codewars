function findOdd(numberList) {
  let set = new Set([])
  for (var numberIndex in numberList)
  {
    const number = numberList[numberIndex]
    if (set.has(number))
      set.delete(number)
    else
      set.add(number)
  }
  return Array.from(set)[0];
}