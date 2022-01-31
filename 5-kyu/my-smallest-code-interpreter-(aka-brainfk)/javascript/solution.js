// Creates a memory tape with size n
function createMemoryTape(n) {
  return Array(n).fill(0);
}

function brainLuck(code, input) {
  let tape = createMemoryTape(100)
  let ptr = 0
  let index = 0;
  let loopStack = []
  let isLooping = false;
  let innerLoop = 0;
  let inputPointer = 0
  let result = ""
  while (code[index]) {
    let char = code[index];
    if (!code[index])
    {
      return result
    }
    if (char == "+") {
      tape[ptr]++;
      if (tape[ptr] == 256)
      {
        tape[ptr] = 0
      }
    } else if (char == "-") {
      tape[ptr]--;
      if (tape[ptr] == -1)
      {
        tape[ptr] = 255
      }
    } else if (char == ">") {
      ptr++;
    } else if (char == "<") {
      ptr--;
    } else if (char == ".") {
      result += String.fromCharCode(tape[ptr]);
    } else if (char == ",") {
      tape[ptr] = input.charCodeAt([inputPointer++])
    }
    // LOOPS
    else if (code[index] == "[" && tape[ptr] == 0) {
      let skip = 1;
      index++
      while (skip != 0) {
        if (code[index] == "[") {
          skip++
        }
        if (code[index] == "]") {
          skip--
        }
        index++
        if (!code[index]) {
          return result
        }
      }
      index--
    }
    else if (code[index] == "]" && tape[ptr] != 0) {
      let skip = 1;
      index--
      while (skip != 0) {
        index--
        if (code[index] == "]") {
          skip++
        }
        if (code[index] == "[") {
          skip--
        }
        if (!code[index]) {
          return result
        }
      }
    }
    
    index++
  }
  return result
}