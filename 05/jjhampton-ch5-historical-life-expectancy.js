import ANCESTRY_FILE from './ancestry-json';
const ancestry = JSON.parse(ANCESTRY_FILE);

// When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

// Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).


const centuries = {};

ancestry.forEach((person) =>  {
    const personAge = person.died - person.born;
    const century = Math.ceil(person.died / 100);
    if (!centuries[century])
        centuries[century] = [personAge];
    else
        centuries[century].push(personAge);
});

for (let century in centuries) {
    if ( centuries.hasOwnProperty([century]) ){
        let averageAge = getAverage(centuries[century]);
        console.log(averageAge);
    }
}

// helper functions

function getAverage(array) {
  function sum(prev, cur) { return prev + cur; }
  const average = array.reduce(sum) / array.length;
  return isInteger(average) ? average : average.toFixed(1);
}

function isInteger(number) {
    return (number === parseInt(number, 10));
}

