function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Divanhana",
            title: "Crven Fesic",
            release_year: 2014,
            formats: {
                1: "DVD",
                2: "RE",
                3: "FD"
            },
            gold: false
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;