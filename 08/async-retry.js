    // Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers, and in the other 50 percent, raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.

"use strict"

//added a message property to the MultiplicatorUnitFailure object so we can log it if we want
function MultiplicatorUnitFailure(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a, b){
// 1) 50% of cases, multiply two numbers, other 50% raise an exception called MultiplicatorUnitFailure
    if (Math.random() < 0.5)
    return a * b;
else
    throw new MultiplicatorUnitFailure('There was a multiplicator unit error');
}

function reliableMultiply(a, b) {
    // To do the retrying, use a loop that breaks only when a call succeeds—as in the look example earlier in this chapter
    // 2) wrap this function in a infite loop until a call succeeds and returns the results
    for (;;) {
        // The call to primitiveMultiply should obviously happen in a try block. 
        try {
             // return the call to primitiveMultiply - this will ensure that the console.log statement logging the return value of reliableMultiply(8, 8) will actually log the return value originally from primitiveMultiply.  reliableMultiply is just the wrapper for the for-loop which calls primitiveMultiply inside a try/catch block.
            return primitiveMultiply(a, b);
        } 
        // The corresponding catch block should rethrow the exception when it is not an instance of MultiplicatorUnitFailure and ensure the call is retried when it is.
        // Ensure it handles only the exceptions that you want - we can look at the book example at the end of the 'Selective Catching' for insipiration.
        catch (e) {
            // add code here that branches two ways, as described above
        }
    }
}

console.log(reliableMultiply(8, 8));  // won't work until the catch