function combineKStrings(array, k, n)
{
  let string = array.slice(n).slice(0, k).join("")
  return string
}

function longestConsec(strarr, k) {
    let longestString = ""
    if (k < 0 || strarr.length < k)
    {
      return ""
    }
    for (let index in strarr)
    {
      let newString = combineKStrings(strarr, k, index)
      if (newString.length > longestString.length)
      {
        longestString = newString
      }
    }
    return longestString
}