var countBits = function(n) {
  let result = 0;
  if (n == 0)
  {
    return result;
  }
  [...parseInt(n).toString(2)].forEach(char => {
      if (char == "1") {
        result++;
      }
    })
  return result
};