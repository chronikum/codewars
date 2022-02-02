function validParentheses(parens) {
  let par1 = 0;
  for (let index in [...parens])
  {
      const c = [...parens][index]
      if (c == "(")
      {
        par1++;
      }
      if (c == ")" && par1 != 0)
      {
        par1--;
      }
      else if (par1 == 0 && c == ")")
      {
        return false
      }
  }
  return par1 == 0
}