// Design an interface that abstracts iteration over a collection of values. An object that provides this interface represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate over the sequence, looking at the element values it is made up of and having some way to find out when the end of the sequence is reached.

// When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log on its first five elements—or fewer, if the sequence has fewer than five elements.

// Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to its constructor) instead.

function Sequence(collection) {
    this.collection = collection;
    this.length = collection.length;
}

Sequence.prototype.getCurrentElement = function(index) {
    return this.collection[index];
}

Sequence.prototype.getRemainingSequence = function(index) {
    var remainingElements = this.collection.slice(index + 1);
    if (remainingElements.length === 0)
        return null;
    else return new Sequence(remainingElements);
}

function logFive(sequence) {
    if (sequence.length === 0)
        return;
    for (var i = 0; i < 5; i++) {
        console.log(sequence.getCurrentElement(i));
        if (!sequence.getRemainingSequence(i)) {
            break;
        }
    }
    console.log(); // empty line to mark end of sequence
}

function ArraySeq(array) {
    return new Sequence(array);
}

function RangeSeq(from, to) {
    var collection = [];
    for (var i = from; i <= to; i++) {
        collection.push(i);
    }

    return new Sequence(collection);
}


logFive(new ArraySeq([1, 2]));
logFive(new ArraySeq([1, 2, 3, 4, 5]));
logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7]));
logFive(new ArraySeq([]));

logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104






