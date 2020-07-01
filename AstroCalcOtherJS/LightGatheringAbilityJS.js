// Tyler Livingston
// Created: June 29, 2020
// Updated: June 29, 2020
// - 

define([], function() {
    var mb = document.getElementById("lightGatheringAbilitySubmitButton");
    mb.addEventListener("click", calculateLightGatheringAbility);
});

const getLensDiameterOfObjectOne=function() {
    var diameter = document.getElementById("lightGatheringAbilityLensDiameterOfObjectOne").value;
    return diameter;
}

const getLensDiameterOfObjectTwo=function() {
    var diameter = document.getElementById("lightGatheringAbilityLensDiameterOfObjectTwo").value;
    return diameter;
}

const calculateLightGatheringAbility=function() {
    var difference = Math.pow((getLensDiameterOfObjectOne.call()/getLensDiameterOfObjectTwo.call()),2);
    // console.log("Difference = " + difference);
    document.getElementById("lightGatheringAbilityResult").innerHTML="Object one gathers " + difference + "% more light than object two.";
}