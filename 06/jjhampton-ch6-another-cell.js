// Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.

// From the EloquentJS book: constructor function for cells that contain text, which implements the interface for table cells:
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

// Constructor function for StrechCell that conforms to the above TextCell interface

function StretchCell(inner, width, height) {
    this.inner = inner;

    this.minWidth = function() {
        return Math.max(width, this.inner.minWidth());
    };

    this.minHeight = function() {
        return Math.max(height, this.inner.minHeight());
    };   
}


// StretchCell.prototype.draw = function(width, height) {
//   return this.inner.draw(width, height - 1)
//     .concat([repeat("-", width)]);
// };

const sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
//console.log(sc.draw(3, 2));
// → ["abc", "   "]