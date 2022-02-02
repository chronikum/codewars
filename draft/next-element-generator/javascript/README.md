# [Next Element Generator](https://www.codewars.com/kata/61fab7a6a0e59f000ef08feb)

In this Kata you will learn how to build javascript generators functions.

Generators are functions that can be exited and later re-entered. Their context will be saved across re-entrances.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead.

Build a generator function which gets called with an array.

The array will always have atleast 3 numbers, and only numbers.

Example:
```
const generator = nextIndex([1,2,3,4,5,6,7])
generator.next().value -> 1
generator.next().value -> 2
generator.next().value -> 3
```

Each `next()` call on the returned iterator object should generate the next element in the previously given array with length n.
If it gets called more then n times, do NOT return undefined.   
Instead, start at the first element again.

Example:
```
const generator = nextIndex([1,2,3])
generator.next().value -> 1
generator.next().value -> 2
generator.next().value -> 3
generator.next().value -> 1
generator.next().value -> 2
generator.next().value -> 3
generator.next().value -> 1
```



Hint:

You can learn about generators here:   
[Generator Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

