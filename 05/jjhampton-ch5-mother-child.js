import ANCESTRY_FILE from './ancestry-json';
const ancestry = JSON.parse(ANCESTRY_FILE);

// Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

// Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

const personsByName = {};

ancestry.forEach((person) =>  {
  personsByName[person.name] = person;
});

const ageDifferences = ancestry
  .filter(person => hasKnownMother(person))  //filter out persons whose mothers are not present in the ancestry array
  .map((person) => {  // map to new array which is only a collection of each person's age mother-child age difference
    let motherObject = personsByName[person.mother];
    return person.born - motherObject.born;
  });

console.log(average(ageDifferences));

// helper functions

function hasKnownMother(person) {
  return personsByName.hasOwnProperty([person.mother]);
}

function average(array) {
  function sum(prev, cur) { return prev + cur; }
  return array.reduce(sum) / array.length;
}