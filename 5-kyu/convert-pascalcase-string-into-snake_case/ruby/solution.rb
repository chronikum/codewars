def is_number_like(n)
  Float(n, exception: false)
end

def is_upcase(n)
  n == n.upcase
end

def to_underscore(string)
  result = ""
  if (string.is_a? String)
    array = string.split("")
    index = 0
    while array[index]
      if (((is_upcase(array[index])) && !is_number_like(array[index])) && index != 0)
          result+="_"
      end
      result+=array[index].downcase
      index+=1
    end
    return result
  end
  return string.to_s
end