def stray (numbers)
  h = numbers.tally.sort_by{ |_,count| -count}.map(&:first).last
end