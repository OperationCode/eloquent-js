//We can define a world with a plan, an array of strings that lays out the world’s grid using one character per square.

const plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

// Vector type to represent x & y coordinate pairs.
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
}

// define the Grid object & basic methods
function Grid(width, height) {

    //When calling the Array constructor with a single number as an argument, it creates a new empty array of the given length.
    this.space = new Array(width * height);

    this.width = width;
    this.height = height;
}

Grid.prototype.isInside = function(vector) {
    return (vector.x >= 0 && vector.x < this.width) && (vector.y >= 0 && vector.y < this.height);
};

Grid.prototype.get = function(vector) {
    return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function(vector, value) {
    this.space[vector.x + this.width * vector.y] = value;
};

var grid = new Grid(10, 30);
console.log(grid.get(new Vector(1, 1)));
// → undefined
grid.set(new Vector(5, 9), "tha man");
console.log(grid.get(new Vector(5, 9)));
// → tha man