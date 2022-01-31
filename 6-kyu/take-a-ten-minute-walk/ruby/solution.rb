def countOccurrences(walk, direction)
  counter = 0
  index = 0
  while walk[index]
    (walk[index] == direction) ? counter+=1 : nil
    index+=1
  end
  return counter
end

def return_true()
  return true
end

def is_valid_walk(walk)
  if (walk.length != 10)
    return false
  end
  return countOccurrences(walk, "w") == countOccurrences(walk, "e") && countOccurrences(walk, "n") == countOccurrences(walk, "s")
end