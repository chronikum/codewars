function findUniq(arr) {
  return arr.filter(x => {
    return arr.indexOf(x) === arr.lastIndexOf(x);
  })[0];
}