function add(num1, num2) {
  num1 = [...String(num1)].reverse()
  num2 = [...String(num2)].reverse()
  let limit = Math.max(num1.length, num2.length)
  let result = []
  for (var i = 0; i < limit; i++)
  {
    result.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0))
  }
  return parseInt(result.reverse().join(""))
}