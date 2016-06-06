'use strict'

// Looping a Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
 
for (let outputCharacter = '#'; outputCharacter.length < 8; outputCharacter += '#') {
    console.log(outputCharacter);
}