function prefill(n, v) {
  if (parseInt(n) === 0) return []
  if (isNaN(n) || n == Infinity || n == -Infinity || n < 0 || n === true || n != parseInt(n) || n === false) throw new TypeError(n + " is invalid")
  return Array(n).fill(v)
}