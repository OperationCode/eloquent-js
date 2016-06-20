// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

function reverseArray(originalArray) {
    let inversedOrderArray = [];

    for (let i = originalArray.length; i > 0; i--) {
        inversedOrderArray.push(originalArray[i - 1]);
    }
    
    return inversedOrderArray;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(originalArray) {
    for (let i = 0; i < Math.floor(originalArray.length / 2); i++) {
        const currentElement = originalArray[i];
        const mirrorImageElement =  originalArray.length - 1 - i;
        originalArray[i] = originalArray[mirrorImageElement];
        originalArray[mirrorImageElement] = currentElement;
    }
    return originalArray;
}

const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
