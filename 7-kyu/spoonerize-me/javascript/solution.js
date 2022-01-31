
function spoonerize(words) {
    let temp = ""
    let wordArray = words.split(" ").map(word => [...word])
    temp = wordArray[0][0];
    wordArray[0][0] = wordArray[1][0]
    wordArray[1][0] = temp
    return wordArray[0].join("") + " " + wordArray[1].join("")
}