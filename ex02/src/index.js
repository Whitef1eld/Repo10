// only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};

function myFunction(myObj) {
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoesValue = myObj.shoes;
    return {
        hatValue,
        shirtValue,
        shoesValue
    };
}
// only change code above this line
console.log(myFunction(myClothes)); // change this line
module.exports = myFunction(myClothes);
