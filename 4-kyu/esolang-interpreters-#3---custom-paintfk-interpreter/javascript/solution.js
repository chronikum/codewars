let width_;
let height_;

function generateInitalGrid(width, height) {
  let array = [];
  for (let h = 0; h < (height); h++) {
    array.push(Array(width).fill(0))
  }
  return array
}

function outputBuilder(array) {
  let arr2 = array.join("\r\n")
  arr2 = arr2.split(",").join("")
  console.log(arr2)
  return arr2
}

// Prevents X going out of bound
function preventOutOfBoundsX(x) {
  if (x == -1) {
    x = (width_ - 1)
  }
  if (x == width_) {
    x = 0
  }
  return x
}

// Prevents Y going out of bound
function preventOutOfBoundsY(y) {
  if (y == -1) {
    y = (height_ - 1)
  }
  if (y == height_) {
    y = 0
  }
  return y
}

function interpreter(code, iterations, width, height) {
  let allowedSymbols = [..."nesw[]*"];
  let index = 0;
  let bit = 0
  let skipAdder = 0
  let datagrid = generateInitalGrid(width, height)
  let doneIterations = 0
  let x = 0
  let y = 0
  width_ = width
  height_ = height
  console.log("Code: " + code)
  if (iterations == 0) {
    return outputBuilder(datagrid)
  }
  while (code[index] && doneIterations != iterations) {
    if (allowedSymbols.includes(code[index])) {
      doneIterations++;
      x = preventOutOfBoundsX(x)
      y = preventOutOfBoundsY(y)
      if (datagrid[y][x] === undefined || datagrid[y][x] === null) {
        return outputBuilder(datagrid)
      } else if (code[index] == "*") {
        datagrid[y][x] = (datagrid[y][x] == 0) ? 1 : 0
      } else if (code[index] == "n") {
        y--;
      } else if (code[index] == "w") {
        x--;
      } else if (code[index] == "s") {
        y++;
      } else if (code[index] == "e") {
        x++;
      } else if (code[index] == "[" && datagrid[y][x] == 0) {
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
            return outputBuilder(datagrid)
          }
        }
        index--
      } else if (code[index] == "]" && datagrid[y][x] != 0) {
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
            return outputBuilder(datagrid)
          }
        }
      }
      x = preventOutOfBoundsX(x)
      y = preventOutOfBoundsY(y)
      index++;
    }
    else
    {
      index++;
    }
  }
  return outputBuilder(datagrid)
}