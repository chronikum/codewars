def is_upper(a)
  return (a.upcase == a)
end

def is_alpha(a)
  !!a.match(/^[[:alpha:]]+$/)
end

def same_case(a, b)
  return (is_alpha(a) && is_alpha(b)) ? ((self.is_upper(a) == self.is_upper(b)) ? 1 : 0) : -1
end