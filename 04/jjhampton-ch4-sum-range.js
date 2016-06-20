'use strict'
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end) {
    const startToEnd = [];
    for (let i = start; i <= end; i++) {
        startToEnd.push(i);
    }
    return startToEnd;
}

console.log(range(1,10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

function sum(arrayOfNumbers) {
    let sumOfNumbers = arrayOfNumbers[0];
    const arrayLength = arrayOfNumbers.length;
    for (let i = 1; i < arrayLength; i++) {
        sumOfNumbers = sumOfNumbers + arrayOfNumbers[i];
    }
    return sumOfNumbers;
}

console.log(sum(range(1,10)));

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function rangeWithStep(start, end, step = start < end ? 1 : -1) {  // ES2015 default parameter
    const startToEnd = [];

    if (start < end) {
        for (let i = start; i <= end; i += step) {
            startToEnd.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i += step) {
            startToEnd.push(i);
        }
    }
  
    return startToEnd;
    
}

console.log(rangeWithStep(1,10));
console.log(rangeWithStep(1,10, 2));
console.log(rangeWithStep(5, 2, -1));





