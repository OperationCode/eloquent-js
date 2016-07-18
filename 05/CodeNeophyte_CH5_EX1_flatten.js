var arrays = [[1, 2, 3], [4, 5], [6]].reduce(function(a, b) {
  return a.concat(b);
}, []);

console.log(arrays);
