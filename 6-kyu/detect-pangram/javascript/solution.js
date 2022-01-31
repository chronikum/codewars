let alphabet = "abcdeghijklmnopqrstuvwxyz"
function isPangram(string){
  let set = new Set([...alphabet]);
  [...string.toLowerCase()].forEach(char => {
    if (set.has(char))
    {
      set.delete(char)
    }
  })
  return (set.size == 0)
}