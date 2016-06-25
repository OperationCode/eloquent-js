// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

function arrayToList(array) {
    const arrayLength = array.length;
    let list = null;
    for (let i = array.length - 1; i >= 0; i-- ) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

const theArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrayToList(theArray));

function listToArray(list) {
    let array = [];
    for (let currentNode = list; currentNode; currentNode = currentNode.rest) {
        array.push(currentNode.value);
    }
    return array;
}

const theList = arrayToList([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(listToArray(theList));

// write helper function 'prepend', which takes an element and a list and creates a new list that adds the element to the front of the input list

function prepend(element, list) {
    let newList;

    // do some stuff here
    return newList;
}