function inAlpha(char) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  if (alphabet.indexOf(char) != -1)
    return (alphabet.indexOf(char) + 1)
  return null
}

function alphabetPosition(text) {
  text = text.toLowerCase()
  var newText = ""
  var res = [...text].map(a => {
    if (inAlpha(a))
    {
      newText += inAlpha(a)
      newText += " "
    }
  });
  return newText.trim(" ")
}