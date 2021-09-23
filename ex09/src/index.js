function myFunction(myObj, checkProp) {
    // only change code below this line
    return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
    // only change code above this line
}

// console.log(myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title"));
module.exports = myFunction;
