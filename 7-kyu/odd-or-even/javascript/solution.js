function add(acc, a) {
  return acc + a;
}

function oddOrEven(array) {
  return (array.reduce(add,0 ) % 2 == 0) ? "even" : "odd"
}