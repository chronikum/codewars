let alpha = "abcdefghijklmnopqrstuvwxyz"
function add(add, acc) {
  return add + (alpha.indexOf(acc) + 1);
}
function sum(word, position) {
  return [
    [...word].reduce(add, 0), word, position
  ]
}
function high(x){
  let words = x.split(" ");
  words = words.map((char, pos) => {
    return sum(char, pos)
  })
  words.sort((a, b) => {
    return b[0] - a[0]
  })
  console.log(words)
  words = words.filter(word => (word[0] == words[0][0]))
  console.log(words)
  return words[0][1]
}