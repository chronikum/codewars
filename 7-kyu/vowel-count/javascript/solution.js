function getCount(str) {
  var vowelsCount = 0;
  let vowels = "aeiuoAEIOU";
  
  [...str].forEach(char => {
    if (vowels.includes(char))
    {
      vowelsCount++;
    }
  })
  
  return vowelsCount;
}