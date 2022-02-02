$iterator = -1
def multiply(num)
  if (num.to_s.length == 1)
    return num
  end
  $iterator+=1
  self.multiply(num.to_s.split("").map(&:to_i).inject(:*))
end
def persistence(n)
    $iterator = 0
    self.multiply(n)
    return $iterator
end