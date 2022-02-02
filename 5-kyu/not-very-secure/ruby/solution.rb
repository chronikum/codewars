def alphanumeric?(string)
  if (string.include?("_"))
    return false
  end
  string.match /^[a-zA-Z\d]+$/
end