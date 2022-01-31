function stringMerge(string1, string2, letter){
  let start = string1.indexOf(letter);
  let end = string2.indexOf(letter);
  
  let substring1 = string1.substring(0, start)
  let substring2 = string2.substring(end)
  return substring1 + substring2
}