function digitize(n) {
  return [...String(n)].map(char => parseInt(char)).reverse()
}