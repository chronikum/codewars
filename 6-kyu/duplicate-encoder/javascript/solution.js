var mapping = {}


function duplicateEncode(word){
  let set = new Set([])
  word = word.toLowerCase();
  
  for (var characterIndex in [...word])
  {
    let char = [...word][characterIndex]
    if (!set.has(char))
      mapping[char] = "("
    else
      mapping[char] = ")"
    set.add(char)
  }
  word = [...word].map(char => mapping[char])
  return word.join("")
}
