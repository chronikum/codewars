function countOccurrencesOfChar(str, looking)
{
  return [...str].filter(char => char == looking).length
}

function XO(str) {
  
  return (countOccurrencesOfChar(str.toLowerCase(), "x") == countOccurrencesOfChar(str.toLowerCase(), "o"))
}