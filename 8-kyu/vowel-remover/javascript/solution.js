function shortcut (string) {
  return [...string].filter(char => !"aeiou".includes(char)).join("")
}