//Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

function deepEqual(x, y) {
    if (isObject(x) && isObject(y) && areSameLength(x, y)) {
        return Object.keys(x).every((key) => {
            return y.hasOwnProperty(key) ? deepEqual(x[key], y[key]) : false;
        });     
    }
    return (x === y);
};

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

function areSameLength(x, y) {
    return Object.keys(x).length === Object.keys(y).length;
}

const obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
