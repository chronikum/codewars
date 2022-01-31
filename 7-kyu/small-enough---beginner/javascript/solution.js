function smallEnough(a, limit){
  return !(a.filter(i => (i <= limit) ? false : true).length > 0)
}