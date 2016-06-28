function arrayToList(array) {
    var list = null;
    for (var i = 0; i < array.length; i++) {
        var right = array.length - 1 - i;
        list = {
            value: array[right],
            rest: list
        }
    }
    //console.log(list);
    return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest){
    array.push(node.value);
    //console.log(node.value);
  }

  //console.log(array);
  return array;
}

function prepend (element, list) {
  return {value: element, rest: list};
}

function nth (list, number) {
  if (!list)
    return undefined;
  else if (number == 0)
    return list.value;
  else
    return nth(list.rest, number - 1);
}

//test
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
