//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

const arrayOfArrays = [[1, 2, 3], [4, 5], [6]];

const singleArray = arrayOfArrays.reduce((prev, cur) => {
    return prev.concat(cur);
});

console.log(singleArray);