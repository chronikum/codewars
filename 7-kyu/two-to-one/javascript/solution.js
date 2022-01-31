function longest(s1, s2) {
  var setWithValues = new Set([...s1, ...s2])
  return Array.from(setWithValues).sort().join("")
}