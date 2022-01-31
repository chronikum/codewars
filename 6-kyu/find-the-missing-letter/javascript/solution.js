let alpha = "abcdefghijklmnopqrstuvwxyz"
let ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function findMissingLetter(array)
{
  const isUpperCase = array[0] == array[0].toUpperCase()
  let startIndex = (isUpperCase ? ALPHA.indexOf(array[0]) : alpha.indexOf(array[0]));
  for (var charIndex in array)
  {
      if (array[charIndex] != (isUpperCase ? ALPHA : alpha)[parseInt(startIndex) + parseInt(charIndex)])
      {
        return (isUpperCase ? ALPHA : alpha)[parseInt(startIndex) + parseInt(charIndex)]
      }
  }
  return ' ';
}