String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => {
    return [...word[0].toUpperCase(), word.substring(1)].join("")
  }).join(" ")
};