// create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
// end of lion object

function myFunction(propName, propValue) { // change this line
    // only change code below this line
    lion[propName] = propValue;
    return lion;
    // only change code above this line
}

myFunction("roar", "roar-roar"); // change this line
module.exports = myFunction;
