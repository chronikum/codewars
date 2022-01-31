function DNAStrand(dna){
  var newString = [...dna].map(x => {
    if (x == "A") {
      return "T"
    }
    else if (x == "T") {
      return "A"
    }
    else if (x == "G") {
      return "C"
    }
    else if (x == "C") {
      return "G"
    }
  })
  return newString.join("")
}