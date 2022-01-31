function multiSplit(string, delimiters)
{
  let newString = string;
  
  [...delimiters].forEach(delimiter => {
    if (newString.includes(delimiter))
    {
      newString = String(newString).split(delimiter).join(" " + delimiter);
      console.log(newString)
    }
  })
  return newString;
}
// complete the function
function solution(string) {
  string = multiSplit(string, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  return string
}
