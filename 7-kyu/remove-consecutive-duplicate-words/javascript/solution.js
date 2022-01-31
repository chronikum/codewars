const removeConsecutiveDuplicates = s => {
  return s.split(" ").filter((word, index) => s.split(" ")[index + 1] != word).join(" ");
}