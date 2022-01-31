function solution(str, ending){
  return [...str].reverse().join("").startsWith([...ending].reverse().join(""));
}