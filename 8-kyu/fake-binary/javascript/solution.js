function fakeBin(x){
 return [...x].map(char => {
   let number = parseInt(char)
    if (number < 5)
    {
      return "0"
    }
    return "1"
  }).join("")
}