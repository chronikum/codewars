def valid_parentheses(string)
  par1 = 0
  
  string.split("").each_with_index{ |c, index|
    puts(c)
    if (c == "(")
      par1+=1
    end
    if (c == ")" && par1 != 0)
      par1-=1
    elsif (par1 == 0 && c == ")")
      return false
    end
  }
  return (par1 == 0)
end