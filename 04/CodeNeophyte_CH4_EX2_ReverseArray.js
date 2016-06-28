function reverseArray (array) {
  //console.log(array.length);
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  //console.log(newArray);
  return newArray;
}

function reverseArray2 (array) {
  //console.log(array.length);
  var newArray = [];
  array.forEach(function(arr){
        newArray.unshift(arr);
  });  
  //console.log(newArray);
  return newArray;
}

function reverseArrayInPlace (array) {
  var right = null;
  var left = null;
  var length = array.length;
  for (left = 0; left < length / 2; left += 1) {
    right = length - 1 - left;
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  //console.log(array);
  return array;
}
