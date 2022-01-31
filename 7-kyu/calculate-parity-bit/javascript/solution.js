function checkParity(parity, bin){
  let countOfOnes = [...bin].filter(numbers => numbers == "1").length;
  switch (parity)
  {
      case "even":
        return (countOfOnes % 2 == 0) ? 0 : 1
        break;
      case "odd":
        return (countOfOnes % 2 == 0) ? 1 : 0
        break;
  }
}