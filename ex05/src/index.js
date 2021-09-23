// create school object here
var school = {
    name: "Arena",
    location: "Sarajevo",
    established: "2020"
};
// end of school object

function myFunction(name) {
    // only change code below this line
    school.name = name;
    return school;
    // only change code above this line
}

myFunction("Paragon"); // change this line
console.log(myFunction("Paragon"));
module.exports = { school, myFunction };
