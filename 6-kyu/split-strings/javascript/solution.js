function solution(str){
  const arr =  [...str]
  let result = []
  let run = 0
  let index = 0
  while (str.length > index)
  {
      let charFirst = arr[parseInt(index)]
      if (!charFirst)
      {
          return result;
      }
      let charSecond = (arr[parseInt(index) + 1]) ? arr[parseInt(index) + 1] : "_"
      if (charSecond != "_")
      {
        index++;
      }
      result.push(charFirst + charSecond)
      index++;
  }
  return result
}