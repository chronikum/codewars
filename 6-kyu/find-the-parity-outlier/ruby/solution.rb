def find_outlier(integers)
  evens = integers.select { |num| num.even?}
  odds = integers.select { |num| num.odd?}
  if (odds.length < evens.length)
    return odds[0]
  end
  return evens[0]
end