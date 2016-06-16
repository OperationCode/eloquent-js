'use strict'

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let number = 1; number < 101; number++) {
    let text = '';
    
    let isDivisibleBy3 = number % 3 === 0;
    let isDivisibleBy5 = number % 5 === 0;
    
    if (isDivisibleBy3)
        text += 'Fizz';
    if (isDivisibleBy5)
        text += 'Buzz';
        
    console.log(text || number); // outputs a Fizz/Buzz/FizzBuzz string, or if text is empty, outputs the number
}
