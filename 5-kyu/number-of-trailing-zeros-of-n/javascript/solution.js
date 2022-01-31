function log5(val) {
  return Math.log(val) / Math.log(5);
}

function zeros (n) {
  if (n == 0)
  {
    return 0
  }
  let kmax = Math.floor(log5(n))
  console.log("KMAX : " + kmax)
  let sum = 0;
  for(let k = 1; k < (kmax + 1); k++) {
    sum += Math.floor(n / (Math.pow(5, k)));
  }
  return Math.floor(sum);
}