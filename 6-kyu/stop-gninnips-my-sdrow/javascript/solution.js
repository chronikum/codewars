function spinWords(string){
  var splittedWords = string.split(" ")
  splittedWords = splittedWords.map(word => {
    if (word.length >= 5)
      return [...word].reverse().join("")
    return word
  })
  return splittedWords.join(" ")
}