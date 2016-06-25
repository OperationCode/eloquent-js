//Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

function deepEqual(x, y) {
	if (((typeof x == "object") && (x != null)) && ((typeof y == "object") && (y != null))) {
		
		var compareLength = function(x,y) {
			let lengthX = 0;
			let lengthY = 0;
			for (var prop in x) {
				lengthX++;
			}
			for (var prop in y) {
				lengthY++;
			} 
			return (lengthX == lengthY);
		}

		if (compareLength(x,y) == false) {
			return false;
		}

		for (var prop in x) {
			if (prop in y) {
				if (deepEqual(x[prop], y[prop]) == false) {
					return false;
				}
			}
			else {
				return false;
			} 
		}
		return true;
	}
return (x === y);
};

const obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
