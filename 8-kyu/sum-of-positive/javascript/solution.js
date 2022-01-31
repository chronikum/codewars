function positiveSum(arr) {
  let sum = 0
  arr = arr.filter(number => number > 0)
  if (arr.length == 0)
    return 0;
  arr.forEach(number => sum += number)
  return sum
}