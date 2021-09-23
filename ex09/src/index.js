function myFunction(myObj, checkProp) {
    // only change code below this line
    return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
    // only change code above this line
}

module.exports = myFunction;
