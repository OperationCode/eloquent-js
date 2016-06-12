'use strict'
//Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 <= num2 ? num1 : num2;
    else
        return "Please enter numbers for both arguments."
}


// testing with a variety of arguments
console.log(min(0, 10));  
console.log(min(0, -10));
console.log(min(-11, -10));
console.log(min(11, 10));
console.log(min(10, 10));
console.log(min('a', -10)); // should not calculate minimum, return string instead