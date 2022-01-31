function duplicateCount(text){
  let set = new Set()
  let doubleSet = new Set()
  let occurences = 0;
  [...text.toLowerCase()].forEach(char => {
    if (set.has(char))
    {
      if (!doubleSet.has(char))
      {
        occurences++;
        doubleSet.add(char)
      }
    }
    else
    {
      set.add(char)
    }
  })
  return occurences
}