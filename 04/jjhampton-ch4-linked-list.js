// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i-- ) {
        list = prepend(array[i], list);
    }
    return list;
}

function listToArray(list) {
    let array = [];
     for (let currentNode = list, i = 0; currentNode; i++) {
        array[i] = nth(list, i);
        currentNode = currentNode.rest;
    }
    return array;
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    };
}

function nth(list, number) {
    if (!number) 
        return list.value;

    return list.rest ? nth(list.rest, number - 1) : undefined;
}

const theArray = [1, 2, 3 ];
console.log(arrayToList(theArray));

const theList = arrayToList([1, 2, 3 ]);
console.log(listToArray(theList));

console.log(nth(arrayToList([10, 20, 30, 40, 50]), 4));
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 8));







