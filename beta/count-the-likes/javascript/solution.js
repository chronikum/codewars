var evalLikes = function(words){
  if (words.length == 0)
  {
    return false
  }
  words = words.map(word => word.toLowerCase())
  let likes = words.filter(word => word == "like")
  if (((words.length / 100) * 5) < likes.length)
  {
    return true
  }
  return false
}