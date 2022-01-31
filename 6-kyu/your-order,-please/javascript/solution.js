function order(words){
  let wordArray = words.split(" ");
  return wordArray.sort((a, b) => parseInt(a.replace( /\D+/g, '')) - parseInt(b.replace( /\D+/g, ''))).join(" ")
}