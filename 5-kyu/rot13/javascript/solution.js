function shiftLetter(char)
{
  var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  
  if (alphabet.indexOf(char.toLowerCase()) != -1)
  {
    if (char === char.toLowerCase())
      return alphabet[alphabet.indexOf(char.toLowerCase()) + 13]
    else
      return alphabet[alphabet.indexOf(char.toLowerCase()) + 13].toUpperCase()
  }
  return char
}

function rot13(message){
  var messageNew = [...message].map(char => shiftLetter(char)).join("")
  return messageNew
}