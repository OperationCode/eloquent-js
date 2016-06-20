// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

function reverseArray(originalArray) {
    const originalArrayLength = originalArray.length;
    let inversedOrderArray = [];

    for (let i = originalArrayLength; i > 0; i--) {
        inversedOrderArray.push(originalArray[i - 1]);
    }
    
    return inversedOrderArray;
}

console.log(reverseArray([1, 2 ,3]));