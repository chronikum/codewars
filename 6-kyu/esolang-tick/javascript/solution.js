function generateStorage() {
  return Array(10000000).fill(0)
}
function interpreter(tape) {
  let storage = generateStorage()
  let index = 0;
  let ptr = 100000;
  let output = ""
  console.log(tape.length)
  while (tape[index])
  {
    if (tape[index] == ">")
    {
      ptr++;
    }
    else if (tape[index] == "<")
    {
      ptr--;
    }
    else if (tape[index] == "+")
    {
      storage[ptr]++;
      if (storage[ptr] == 256)
      {
        storage[ptr] = 0;
      }
    }
    else if (tape[index] == "*")
    {
      output += String.fromCharCode(parseInt(storage[ptr]))
    }
    index++;
  }
  
  return output
}