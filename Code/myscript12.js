
//JavaScript has objects but does not have class (and then use a new instance of the class as object)
var batwing = {
    status: "Ready",
    rescueBatman: function() {
        document.write("Locating his transponder ... Initiating launch ...");
    }
}
/*
if (batwing.status === "Ready") {
    batwing.rescueBatman();
}
*/

var utilities = {
    printAllMembers: function(targetObject) {
        for (i in targetObject) {
            document.write("<br />" + targetObject[i]);
        }
    }
}

//utilities.printAllMembers(batwing);

var i_am_empty = {};

//utilities.printAllMembers(i_am_empty);

var planet = {
    id: 34,
    name: "Imtempesta Nox",
    faction: {
        factionId: 2,
        name: "Nex",
        notification: function() {
            document.write("Nex alliance ... unite!");
        }
    },
    cities: [
        {locationId: 15, name: "Gladius"},
        {locationId: 16, name: "Chalybs"},
        {locationId: 17, name: "Ensis"}
    ]
};

/* Complex Example below:
planet.faction.notification();
document.write("<br /> " + planet.cities[1].name);

// rename the planet
document.write("<br />" + planet.name);
planet.name = "Vultus";
document.write("<br />" + planet.name);

//set reference to planet, and use its properties:
var z = planet;
document.write(z.name);

// Add another peremeter into the object outside of it,
// after verify its 'typeof' as 'undefined' -- so it is a new perameter and not overwrite an existing one
if (typeof planet.defense === "undefined") {
    planet.defense = "Ion Canon";
}

document.write(planet.defense);

//test out for loop here:
for (member in planet) {
    document.write("<br />" + member + "==> " + planet[member]);
}
*/

//Because Javascript does not have the concept of 'Class',
//you have to use the 'constructor' method to build a new object:

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new car("eagle", "Talon TSi", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.model);

//Just remember: Javascript is a 'classless' language !!!