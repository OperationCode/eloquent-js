// Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.

// From the EloquentJS book: constructor function for cells that contain text and its prototype methods, which implement the interface for table cells:

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce((width, line) => {
    return Math.max(width, line.length);
  }, 0);
};

TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

// From the EloquentJS book: helper function used in TextCell.prototype.draw, which builds a string whose value is the string argument repeated times number of times:

function repeat(string, times) {
  var result = "";
    for (var i = 0; i < times; i++)
        result += string;
  return result;
}

// Constructor function for StrechCell that conforms to the above TextCell interface

function StretchCell(inner, width, height) {
    this.inner = inner;

    this.minWidth = function() {
        return Math.max(width, this.inner.minWidth());
    };

    this.minHeight = function() {
        return Math.max(height, this.inner.minHeight());
    };   

    this.draw = function(width, height) {
        return this.inner.draw(width, height);
    }
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
