function interpreter(tape, array) {
  let index = 0;
  let ptr = 0;
  
  tape = [...tape]
  array = [...array]
  
  while (array[ptr])
  {
    if (index == tape.length)
    {
      index = 0
    }
    if (tape[index] == "0")
    {
      ptr++;
    }
    else if (tape[index] == "1")
    {
      array[ptr] = array[ptr] == "0" ? "1" : "0";
    }
    index++;
  }
  return array.join("")
}