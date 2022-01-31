let grid;

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => parseInt(i + startAt));
}

function checkColumn(grid, column, value) {
  for (var i = 0; i < grid.length; i++) {
    if (grid[i][column] === value) {
      return false;
    }
  }

  return true;
};

function checkRow(board, row, value) {
  for (var i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }

  return true;
}

function checkSquare(grid, row, column, value) {
  boxRow = Math.floor(row / 3) * 3;
  boxCol = Math.floor(column / 3) * 3;

  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      if (grid[boxRow + r][boxCol + c] === value)
        return false;
    }
  }

  return true;
};

function isPossible(y, x, n) {
  if (!checkRow(grid, y, n)) return false;
  if (!checkColumn(grid, x, n)) return false;
  if (!checkSquare(grid, y, x, n)) return false;
  return true
}

function nextEmptySpot() {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (grid[i][j] === 0)
        return [i, j];
    }
  }
  return [-1, -1];
}

function solve(grid) {

  let emptySpot = nextEmptySpot(grid);
  let row = emptySpot[0];
  let col = emptySpot[1];
  let num = 1
  if (row == -1) {
    return grid;
  }

  while (num <= 9) {
    if (isPossible(row, col, num)) {
      grid[row][col] = num;
      solve(grid);
    }
    ; num++
  }

  if (nextEmptySpot(grid)[0] !== -1)
    grid[row][col] = 0;

  return grid;
}

function sudoku(puzzle) {
  grid = puzzle
  solve(grid)
  return grid
}