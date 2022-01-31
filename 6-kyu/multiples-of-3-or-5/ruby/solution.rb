def solution(number)
  sumAllNumbers = 0
  counter = 0
  (number < 0) ? (return 0) : nil
  while (counter < number)
    ((counter % 3 == 0) || (counter % 5 == 0)) ? sumAllNumbers+=counter : nil
    counter+=1
  end
  return sumAllNumbers
end