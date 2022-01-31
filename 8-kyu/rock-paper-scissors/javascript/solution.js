var mappings = {
  scissors: "paper",
  paper: "rock",
  rock: "scissors",
}

const rps = (p1, p2) => {
  if (mappings[p1] == p2)
    return "Player 1 won!";
  if (mappings[p2] == p1)
    return "Player 2 won!";
  else
    return "Draw!"
};

