function countOccurences(walk, direction)
{
  return walk.filter(dir => dir == direction).length;
}

function isValidWalk(walk) {
  let ns = 0;
  let ew = 0;
  if (walk.length == 10)
  {
    for (var pathIndex in walk)
    {
      if (countOccurences(walk, "w") == countOccurences(walk, "e") && countOccurences(walk, "n") == countOccurences(walk, "s"))
      {
        return true;
      }
      return false;
    }
  }
  return false;
}