def two_sum(numbers, target)
  numbers.each_with_index{ |n, i1| 
      numbers.each_with_index{ |s, i2|
        puts("#{n} and #{s}")
        if (s + n == target && i1 != i2)
          return [i1, i2]
        end
    }
  }
end