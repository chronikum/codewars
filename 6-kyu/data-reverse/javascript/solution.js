function* chunksGen(a, n) {
  for (let i = 0; i < a.length; i += n)
  {
    yield a.slice(i, i + n);
  }
}
function dataReverse(data) {
  return [...chunksGen(data, 8)].reverse().join(",").split(",").map(x => parseInt(x)).filter(x => !isNaN(x))
}