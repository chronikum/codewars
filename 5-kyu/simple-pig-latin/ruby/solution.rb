def pig_it(str)
  alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  res = str.split(" ").map { |word|
    if (alpha.split("").include?(word.split("").first))
      word = (word + word.split("").first + "ay")
      word = word[1..-1]
    end
    word
  }
  return res.join(" ")
end