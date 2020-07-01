// Tyler Livingston
// Created: June 2020
// Updated: June 25, 2020
// - Will calculate the estimated time 
//     it would take to travel to another 
//     star system, from Earth.

define([], function() {
    var mb = document.getElementById("travelToAnotherStarSystemSubmitButton");
    mb.addEventListener("click", provideAnswer);
});

const provideAnswer=function() {
    if (document.getElementById("travelToAnotherStarSystemUnit").value == "Metric") {
        // console.log("Selected unit was Metric");
        amountOfTimeInMetric.call();
    } else {
        // console.log("Selected unit was Standard");
        amountOfTimeInStandard.call();
    }
}

const getDistanceToOtherStarSystemInLightyears = function(){
    return document.getElementById("travelToAnotherStarSystemDistance").value; //Get the distance to the other planet in lightyears
}

const getSpeedOfSpacecraft = function(){
    return document.getElementById("travelToAnotherStarSystemSpeedOfSpacecraft").value; //Get speed of spacecraft
}

const getLightyearInMiles = function(){
    return 5.879 * Math.pow(10, 12); //miles
}

const getLightyearInKilometers = function(){
    return 9.461 * Math.pow(10, 12); //kilometers
}

const getNumberOfHoursInOneYear = function(){
    return 8760; //hours
}

const amountOfTimeInStandard = function(){
    var hoursPerLightYearStandard = (getLightyearInMiles.call() / getSpeedOfSpacecraft.call());
    var yearsToTravelOneLightYearAtSpacecraftsTopSpeedInStandard = (hoursPerLightYearStandard / getNumberOfHoursInOneYear.call());
    var amountOfTimeInStandard = Math.round((getDistanceToOtherStarSystemInLightyears.call() * yearsToTravelOneLightYearAtSpacecraftsTopSpeedInStandard));
    // console.log("The amount of time it would take to travel to another palnet at the speed of " + getSpeedOfSpacecraft.call() + " MPH would be about " + amountOfTimeInStandard + " years.");
    document.getElementById("travelToAnotherStarSystemResult").innerHTML="It will take you about " + amountOfTimeInStandard.toLocaleString() + " year(s) to travel, at the speed of " + getSpeedOfSpacecraft.call().toLocaleString() + " MPH, to a star system that is " + getDistanceToOtherStarSystemInLightyears.call() + " Lightyears away.";
}

const amountOfTimeInMetric = function(){
    var hoursPerLightYearMetric = (getLightyearInKilometers.call() / getSpeedOfSpacecraft.call());
    var yearsToTravelOneLightYearAtSpacecraftsTopSpeedInMetric = (hoursPerLightYearMetric / getNumberOfHoursInOneYear.call());
    var amountOfTimeInMetric = Math.round((getDistanceToOtherStarSystemInLightyears.call() * yearsToTravelOneLightYearAtSpacecraftsTopSpeedInMetric));
    // console.log("The amount of time it would take to travel to another palnet at the speed of " + getSpeedOfSpacecraft.call() + " KM/H would be about " + amountOfTimeInMetric + " years.");
    document.getElementById("travelToAnotherStarSystemResult").innerHTML="It will take you about " + amountOfTimeInMetric.toLocaleString() + " year(s) to travel, at the speed of " + getSpeedOfSpacecraft.call().toLocaleString() + " KM/H, to a star system that is " + getDistanceToOtherStarSystemInLightyears.call() + " Lightyears away.";
}