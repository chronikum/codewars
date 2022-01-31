function lowestPositiveInteger(array){
  return array.filter(number => number > 0).sort((a,b) => a - b)[0]
}