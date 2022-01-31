function digital_root(n) {
  let sum = 0;
  
  [...String(n)].forEach(number => {
    console.log(number)
    sum += parseInt(number)
  })
  if (String(sum).length >= 2)
    sum = digital_root(parseInt(sum))
  return sum;
}