function isIsogram(str){
  let set = new Set([])
  let flag = true;
  [...str.toLowerCase()].forEach(char => {
    if (set.has(char))
    {
      flag = false
    }
    set.add(char)
  })
  return flag
}