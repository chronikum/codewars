function descendingOrder(n){
  return parseInt([...String(n)].sort((a,b) => b-a).join(""))
}