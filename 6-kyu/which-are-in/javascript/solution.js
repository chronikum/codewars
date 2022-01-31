function inArray(array1,array2){
  return array1.filter(word => array2.join(" ").search(word) !== -1 && word !== undefined).sort()
}