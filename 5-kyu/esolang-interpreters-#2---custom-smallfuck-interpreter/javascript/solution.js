function interpreter(code, originalTape) {
  let index = 0;
  let bit = 0
  let tape = [...originalTape]
  let skipAdder = 0
  while (code[index]) {
    if (!tape[bit]) {
      return tape.join("")
    }
    if (code[index] == "*") {
      tape[bit] = (tape[bit] == "0") ? "1" : "0"
    }
    if (code[index] == ">") {
      bit++;
    }
    if (code[index] == "<") {
      bit--;
    }
    if (code[index] == "[" && tape[bit] == "0") {
      skipAdder++;
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
          return tape.join("")
        }
      }
      index--
    }
    if (code[index] == "]" && tape[bit] != "0") {
      skipAdder--;
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
          return tape.join("")
        }
      }
    }
    index++;
  }
  return tape.join("")
}
