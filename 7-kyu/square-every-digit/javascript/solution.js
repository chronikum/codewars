function squareDigits(num){
  let newString = ""
  Array.from(String(num)).forEach(char => {
    newString += String(char*char)
  })
  return parseInt(newString)
}