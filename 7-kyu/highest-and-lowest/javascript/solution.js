function highAndLow(numbers){
  var lowest = NaN;
  var highest = NaN;
  for (var numberIndex in numbers.split(" "))
  {
    let number = parseInt(numbers.split(" ")[numberIndex])
    if (isNaN(lowest))
      lowest = number;
    if (isNaN(highest))
      highest = number;
    if (highest < number)
      highest = number;
    if (lowest > number)
      lowest = number;
  }
  return highest +  " " + lowest
}