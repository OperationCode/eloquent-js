'use strict'

/* -------------------------------
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
-------------------------------*/

function countBs(stringToCheck, charToCount) {
    const stringLength = stringToCheck.length; // cache string length to prevent repeated lookups during each for loop iteration
    let counter = 0;
    for (let i = 0; i < stringLength; i++) {
        if (stringToCheck.charAt(i) === charToCount) 
            counter++
    }
    return counter;
}

// testing out various arguments passed in to countBs
console.log(countBs('BBB', 'B'));
console.log(countBs('BBB', 'A'));
console.log(countBs('BBaB', 'B'));
console.log(countBs('AaA', 'B'));
console.log(countBs('AaA', 'A'));
console.log(countBs('Bab', 'B'));
console.log(countBs('Bab', 'a'));