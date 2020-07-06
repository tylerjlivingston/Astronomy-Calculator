// Tyler Livingston
// Created: June 28, 2020
// Updated: June 28, 2020
// - Will calculate wavelength

define([], function() {
    document.getElementById("sizeOfEventHorizonResult").innerHTML="Please enter data in the required feild.";
    var mb = document.getElementById("sizeOfEventHorizonSubmitButton");
    mb.addEventListener("click", calculate);
});

const getDesiredSolarMass = function () {
    var mass = null;
    var massTemp = document.getElementById("sizeOfEventHorizonDesiredSolarMass").value;
    var power = document.getElementById("sizeOfEventHorizonDesiredSolarMassApplyScientificNotation").value;
    if (power != "") {
        mass = massTemp * Math.pow(10, power);
        console.log("Calculated mass: " + mass);
    }else{
        mass = massTemp;
        console.log("Desired mass: " + mass);
    }
    if (mass == "") {
        alert("Please enter a valid input for the mass of a black hole.");
    } else {
        return mass;
    }
}

function calculate() {
    var gravitationalConstant = (6.67 * (Math.pow(10,-11)));
    var oneSolarMass = (1.99 * (Math.pow(10,33)));
    var calculateSolarMass = getDesiredSolarMass.call() * oneSolarMass;
    var speedOfLightSquared = Math.pow((3 * Math.pow(10,8)), 2);
    var schrwazchildRadius = (2 * gravitationalConstant * calculateSolarMass) / speedOfLightSquared;
    console.log("Schrwazchild Radius: " + schrwazchildRadius);
    document.getElementById("sizeOfEventHorizonResult").innerHTML="<var>Rs</var> = <strong>" + schrwazchildRadius.toLocaleString() + "</strong>";
}


