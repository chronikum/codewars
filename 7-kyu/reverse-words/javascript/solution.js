function reverseWords(str) {
  return [...str].reverse().join("").split(" ").reverse().join(" ")
}