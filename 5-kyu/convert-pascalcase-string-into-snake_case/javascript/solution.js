function isDigit(n)
{
  return !isNaN(parseInt(n))
}

function isUpperCase(n)
{
  return n.toUpperCase() == n
}

function toUnderscore(string) {
  
  let result = ""
  let index = 0
  if (typeof string === "string")
  {
    string = [...string]
    while (string[index])
    {
      if ((isUpperCase(string[index]) && !isDigit(string[index])) && index != 0)
      {
        result += "_"
      }
      result += string[index].toLowerCase()
      index++;
    }
    console.log(result)
    return result
  }
  return String(string)
}