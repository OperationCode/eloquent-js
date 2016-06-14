'use strict'

/* -------------------------------
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

* Zero is even.

* One is odd.

* For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
-------------------------------*/

function isEven(testedNumber) {
    // using Math.abs() to conditionally check against only absolute aka positive values of numbers - this  prevents overflowing call stack and allows recursion stop condition to eventually get called
    if (Math.abs(testedNumber) === 0)  
        return true;
    if (Math.abs(testedNumber) === 1)
        return false;
    return isEven(Math.abs(testedNumber) - 2);
}

console.log('testing against 50:', isEven(50));
console.log('testing against 75:', isEven(75));
console.log('testing against -1:', isEven(-1));
console.log('testing against -10:', isEven(-10));