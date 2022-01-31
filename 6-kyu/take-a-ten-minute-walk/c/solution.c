#include <stdbool.h>

// input is a null-terminated string

int strlen(char *str)
{
  int length = 0;
  while (str[length])
    length++;
  return length;
}

int countOfChar(char *str, char c)
{
  int count = 0;
  int index = 0;
  
  while (str[index])
  {
    if (str[index] == c)
      count++;
    index++;
  }
  return count;
}

bool isValidWalk(const char *walk) {

  if (strlen(walk) == 10)
  {
    if (countOfChar(walk, 'w') == countOfChar(walk, 'e') && countOfChar(walk, 'n') == countOfChar(walk, 's'))
      return true;
  }
  return false;
}