function accum(s) {
  let result = ""
  let iteration = 1;
  
  [...s].forEach(char => {
    for (let i = 0; i < iteration; i++)
    {
      if (i == 0)
      {
        result += char.toUpperCase();
      }
      else
      {
        result += char.toLowerCase();
      }
    }
    iteration++;
    result += "-";
  })
  return result.slice(0, -1)
}