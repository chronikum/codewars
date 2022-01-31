def get_count(input_str)
  vowels = ['a','e','i','o','u']
  vowelCount = 0
  input_str.split("").each{ |c| (vowels.include?(c) == true) ? vowelCount+=1 : nil}
  return vowelCount
end