'use strict'

/* -------------------------------
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
-------------------------------*/

function countBs(testedString) {
    const stringLength = testedString.length;
    let counter = 0;
    for (let i = 0; i < stringLength; i++) {
        if (testedString.charAt(i) === 'B') 
            counter++
    }
    return counter;
}

// testing out various arguments passed in to countBs
console.log(countBs('BBB'));
console.log(countBs('BBaB'));
console.log(countBs('AaA'));
console.log(countBs('Bab'));





