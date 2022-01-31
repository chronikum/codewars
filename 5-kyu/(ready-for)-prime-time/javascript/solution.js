function isPrime(number)
{
  for (var i = 2; i < number; i++)
  {
    if (number % i == 0) return false;
  }
  return number > 1
}

function prime(num) {
  let primes = []
  if (num == 1)
    return []
  if (num == 2)
  {
    return [num]
  }
  for (var i = 1; i < (num + 1); i++)
  {
    if (isPrime(i))
    {
      primes.push(i)
    }
  }
  return primes
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
}