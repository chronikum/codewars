decodeMorse = function(morseCode){
  let chars = morseCode.split("  ")
  let string = ""
  for (var wordIndex in chars)
  {
    let word = chars[wordIndex]
    let wordChars = word.split(" ")
    for (charIndex in wordChars)
    {
        if (MORSE_CODE[wordChars[charIndex]])
        {
            string += MORSE_CODE[wordChars[charIndex]]
        }
    }
    string += " "
  }
  string = string.trim(" ")
  return string
}