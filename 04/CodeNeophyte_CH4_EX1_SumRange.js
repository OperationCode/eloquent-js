function range(start, end, step) {
  var output = [];
  //console.log(step);
  if (typeof step !== 'undefined') {
    for (var i = start; i<= end; i += step) {
    output.push(i); 
    }
  } else {
    for (var i = start; i<= end; i++) {
    output.push(i); 
    }
  }

  //console.log(output);
  return output;
}

function sum(array) {
  var total = array.reduce(function(a, b){
    return a + b;
  });
//console.log(total);
}