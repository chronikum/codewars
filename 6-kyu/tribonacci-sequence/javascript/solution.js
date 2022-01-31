function tribonacci(signature,n){
  var tribonacci = signature;
  for (var i = 3; i < n; i++)
  {
    tribonacci.push((tribonacci[i-1] + tribonacci[i-2] + tribonacci[i-3]))
  }
  return tribonacci.slice(0,n)
}