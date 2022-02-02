$width_;
$height_;
def generate_initial_grid(width, height)
  $width_ = width;
  $height_ = height;
  array = []
  (height).times { |row|
  array.push(Array.new(width).fill(0))
  }
  return array
end

def output_builder(data_grid)
  resultString = ""
  data_grid.each_with_index { |row, index|
  if (index != 0)
    resultString += "\r\n"
  end
  resultString += row.join("")
  }
  return resultString
end

def preventOutOfBoundsX(x)
  if (x == -1)
  x = ($width_ - 1)
  end
  if (x == $width_)
  x = 0
  end
  return x
end

def preventOutOfBoundsY(y)
  if (y == -1)
  y = ($height_ - 1)
  end
  if (y == $height_)
  y = 0
  end
  return y
end

def allowed_symbols()
  return ["n","e","w","s","[","]","*"]
end

def interpreter code, iterations, width, height
  data_grid = self.generate_initial_grid(width, height)
  index = 0;
  bit = 0
  skipAdder = 0
  doneIterations = 0
  x = 0
  y = 0
  if (iterations == 0)
  return output_builder(data_grid)
  end
  
  
  # start
  
  while (code[index] && doneIterations != iterations)
    if (self.allowed_symbols.include?(code[index])) # if symbol is in allowed symbols, continue
      doneIterations+=1
      # prevent out of bound
      x = self.preventOutOfBoundsX(x)
      y = self.preventOutOfBoundsY(y)
      # interpreting
      if !data_grid[y][x]
        return outputBuilder(data_grid)
      elsif (code[index] == "*")
        data_grid[y][x] = (data_grid[y][x] == 0) ? 1 : 0
      elsif (code[index] == "n")
        y-=1;
      elsif (code[index] == "w")
        x-=1;
      elsif (code[index] == "s")
        y+=1;
      elsif (code[index] == "e")
        x+=1;
      elsif (code[index] == "[" && data_grid[y][x] == 0) # loop 1
        skip = 1
        index += 1
        while (skip != 0)
          if (code[index] == "[")
            skip+=1
          end
          if (code[index] == "]")
            skip-=1
          end
          index+=1
          if (!code[index])
            return output_builder(data_grid)
          end
        end
        index -= 1
      elsif (code[index] == "]" && data_grid[y][x] != 0) # loop 2
        skip = 1
        index-=1
        while (skip != 0)
          index-=1
          if (code[index] == "]")
            skip+=1
          end
          if (code[index] == "[")
            skip-=1
          end
          if (!code[index])
            return output_builder(data_grid)
          end
        end
      end
      x = self.preventOutOfBoundsX(x)
      y = self.preventOutOfBoundsY(y)
      index+=1
    else
      index+=1
    end
  end
  
  
  
  # stop
  
  return output_builder(data_grid)
end