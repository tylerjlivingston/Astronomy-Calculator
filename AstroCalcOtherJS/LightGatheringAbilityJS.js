// Tyler Livingston
// Created: June 29, 2020
// Updated: July 1, 2020
// - This file will compare two lens diameters
//   and calculate the difference between the two.

define([], function() {
    document.getElementById("lightGatheringAbilityResult").innerHTML="Please enter data in all required feilds."
    var mb = document.getElementById("lightGatheringAbilitySubmitButton");
    mb.addEventListener("click", calculateLightGatheringAbility);
});

const getLensDiameterOfObjectOne=function() {
    var diameter = document.getElementById("lightGatheringAbilityLensDiameterOfObjectOne").value;
    if (diameter == "") {
        alert("Please enter a valid input for object one.");
    } else {
        return diameter;
    }
}

const getLensDiameterOfObjectTwo=function() {
    var diameter = document.getElementById("lightGatheringAbilityLensDiameterOfObjectTwo").value;
    if (diameter == "") {
        alert("Please enter a valid input for object two.");
    } else {
        return diameter;
    }
}

const calculateLightGatheringAbility=function() {
    var difference = Math.pow((getLensDiameterOfObjectOne.call()/getLensDiameterOfObjectTwo.call()),2);
    // console.log("Light Gathering Ability Result = " + difference);
    document.getElementById("lightGatheringAbilityResult").innerHTML="Object one gathers <strong>" + difference.toFixed(1) + "%</strong> more light than object two.";
}