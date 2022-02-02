def silly_add(a, b)
  num1 = a.to_s.split("").reverse()
  num2 = b.to_s.split("").reverse()
  result = []
  limit = [num1.length, num2.length].max
  limit.times { |i| 
    result.push((num1[i].to_i || 0) + (num2[i].to_i || 0))
  }
  return result.reverse().join("").to_i
end