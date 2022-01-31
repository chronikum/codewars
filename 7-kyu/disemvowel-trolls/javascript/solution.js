function disemvowel(str) {
  return [...str].filter(char => !"aeiouAEIOU".includes(char)).map(char => char).join("");
}