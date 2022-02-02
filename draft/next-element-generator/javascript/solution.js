function* nextIndex(array) {
  let i = 0
  while (true)
  {
    if (!array[i]) i = 0;
    yield array[i]
    i++;
  }
}