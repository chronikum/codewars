function DNAtoRNA(dna) {
  return [...dna].map(char => char == "T" ? "U" : char).join("")
}