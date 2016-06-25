// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

function arrayToList(array) {
    const list = {
        value: array[0],
        rest: {
            value: array[1],
            rest: {
                value: array[2],
                rest: null
            }
        }
    };
    return list;
}

const theArray = [1, 2, 3];
console.log(arrayToList(theArray));

function listToArray(list) {
    console.log(list);
    const array = [
        list.value, 
        list.rest.value, 
        list.rest.rest.value
    ];
    return array;
}

const theList = arrayToList([1, 2, 3]);
console.log(listToArray(theList));