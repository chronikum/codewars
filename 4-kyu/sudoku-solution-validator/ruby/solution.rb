def validateArray(cow)
  if (cow.include?(0))
    return false
  end
  if (cow.to_set.length == cow.length)
    return true
  end
  return false
end

def checkSquare(board, column, row)
  boxRow = (row / 3).floor(0) * 3
  boxCol = (column / 3).floor(0) * 3
  arr = []
  3.times { |r|
    3.times { |c|
      arr.push(board[boxRow + r][boxCol + c])
    }
  }
  if (arr.to_set.length != arr.length)
    return false
  end
  return true
end

def validSolution(board)
  # check row
  for row in board[0..8]
    if (!validateArray(row))
      return false
    end
  end
  # check column
  for row in board.transpose[0..8]
    if (!validateArray(row))
      return false
    end
  end
  
  9.times { |x|
    9.times { |y|
      if (!checkSquare(board, (x), (y)))
        return false
      end
    }
  }
  
  return true
end