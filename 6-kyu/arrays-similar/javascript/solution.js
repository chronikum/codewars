

function arraysSimilar(arr1, arr2) {
  arr1.sort()
  arr2.sort()
  if (JSON.stringify(arr1) == JSON.stringify(arr2))
  {
    return true
  }
  return false
}