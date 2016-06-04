'use strict'

// Chess board
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

const size = 8;  // this can be changed to any size grid

let string = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size; j ++) {
        
        if (j === size) {
            string += '\n';
            break;
        }
        
        let character = i + j; // toggles the output character on even/odd lines
        if (character % 2 === 0) 
            string += ' ';
        else 
            string += '#';
    }
}

console.log(string);