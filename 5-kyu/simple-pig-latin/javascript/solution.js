var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
function pigIt(str){
  console.log("To split: " + str)
  return str.split(" ").map(word => {
    if (alphabet.includes(word[0]))
    {
      return word.substr(1) + [...word][0] + "ay";
    }
    return word
  }).join(" ")
}