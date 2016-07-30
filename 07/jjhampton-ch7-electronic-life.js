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

    // when calling the Array constructor with a single number as an argument, it creates a new empty array of the given length.
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

// use to object to map from direction names to coordinate offsets
var directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");

// critter that just follows its nose until it hits an obstacle and then bounces off in a random open direction:

function BouncingCritter() {
  this.direction = randomElement(directionNames);
};

// each critter object has an act method that, when called, returns an action. 
// when the act method is called, it is given a view object that allows the critter to inspect its surroundings. 
BouncingCritter.prototype.act = function(view) {

    // The view object has a method look, which takes a direction and returns a character, for example "#" when there is a wall in that direction, or " " (space) when there is nothing there.
    if (view.look(this.direction) != " ")
        // The view object also provides the convenient methods find and findAll. Both take a map character as an argument. The first returns a direction in which the character can be found next to the critter or returns null if no such direction exists. The second returns an array containing all directions with that character.
        this.direction = view.find(" ") || "s";

// An action is an object with a type property, which names the type of action the critter wants to take, for example "move"
    return {type: "move", direction: this.direction};
};