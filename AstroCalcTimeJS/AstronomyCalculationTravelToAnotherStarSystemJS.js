// Tyler Livingston
// Created: June 2020
// Updated: June 25, 2020
// - Will calculate the estimated time 
//     it would take to travel to another 
//     star system, from Earth.

define([], function () {
    document.getElementById("travelToAnotherStarSystemResult").innerHTML = "Please enter data in all required feilds."
    var mb = document.getElementById("travelToAnotherStarSystemSubmitButton");
    mb.addEventListener("click", provideAnswer);
});

const provideAnswer = function () {
    if (document.getElementById("travelToAnotherStarSystemUnit").value == "Metric") {
        // console.log("Selected unit was Metric");
        calculateTimeToStarSystem("Metric");
    } else {
        // console.log("Selected unit was Standard");
        calculateTimeToStarSystem("Standard");
    }
}

const getDistanceToOtherStarSystemInLightyears = function () {
    var distance = document.getElementById("travelToAnotherStarSystemDistance").value; //Get the distance to the other planet in lightyears
    if (distance == "") {
        alert("Please enter a valid input for the distance to another star system.");
    } else {
        return distance;
    }
}

const getSpeedOfSpacecraft = function () {
    var speed = document.getElementById("travelToAnotherStarSystemSpeedOfSpacecraft").value; //Get speed of spacecraft
    if (speed == "") {
        alert("Please enter a valid input for the speed of a spacecraft.");
    } else {
        return speed;
    }
}

const getLightyearInMiles = function () {
    return 5.879 * Math.pow(10, 12); //miles
}

const getLightyearInKilometers = function () {
    return 9.461 * Math.pow(10, 12); //kilometers
}

const getNumberOfHoursInOneYear = function () {
    return 8760; //hours
}

function calculateTimeToStarSystem(unit) {
    var speedLabel = "";
    var speedOfSpacecraft = getSpeedOfSpacecraft.call();
    var distanceToStarSystem = getDistanceToOtherStarSystemInLightyears.call();
    var numberOfHoursInOneYear = getNumberOfHoursInOneYear.call();
    var lightyearInDesiredUnit = ""; // Will be set based on user input

    if (unit == "Metric") {
        lightyearInDesiredUnit = getLightyearInKilometers.call();
        speedLabel = "KM/H";
    } else {
        lightyearInDesiredUnit = getLightyearInMiles.call();
        speedLabel = "MPH";
    }
    
    var hoursPerLightYear = (lightyearInDesiredUnit / speedOfSpacecraft);
    var yearsToTravelOneLightYearAtSpacecraftsTopSpeedInMetric = (hoursPerLightYear / numberOfHoursInOneYear);
    var amountOfTime = Math.round((distanceToStarSystem * yearsToTravelOneLightYearAtSpacecraftsTopSpeedInMetric));
    // console.log("Amount of time to travel: + amountOfTime);
    document.getElementById("travelToAnotherStarSystemResult").innerHTML ="It will take you about <strong>" + parseInt(amountOfTime).toLocaleString() + " year(s)</strong> to travel, at the speed of " + parseInt(speedOfSpacecraft).toLocaleString() + " " + speedLabel + ", to a star system that is " + distanceToStarSystem + " Light-years away.";
}