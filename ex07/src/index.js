function myFunction(propName) { // change this line
    // only change code below this line
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };

    delete lion[propName];
    return lion;
    // only change code above this line
}

myFunction("roar"); // change this line
module.exports = myFunction;
