function logFive(series) {
  for (var i = 0; i < 5; i++) {
    if (!series.next())
      break;
    console.log(series.current());
  }
}

function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}

ArraySeq.prototype.next = function () {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
}

ArraySeq.prototype.current = function () {
  return this.array[this.pos];
}

function RangeSeq(from, to) {
  this.pos = from -1;
  this.to = to;
}

RangeSeq.prototype.next = function () {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
}

RangeSeq.prototype.current = function () {
  return this.pos
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
