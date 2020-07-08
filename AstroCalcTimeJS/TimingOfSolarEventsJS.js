// Tyler Livingston
// Created: June 16, 2020
// Updated: July 6, 2020
// - Basic equation used in figuring out when
//      events on the Sun will impact Earth.

define([], function () {
    timingOfSolarEventsResultTemp.call();
    var mb = document.getElementById("timingOfSolarEventsSubmitButton");
    mb.addEventListener("click", calculateEstimatedTimeOfImpact);
});

function timingOfSolarEventsResultTemp() {
    document.getElementById("timingOfSolarEventsResult").innerHTML = "Please enter data in all required feilds.";
}

const getDistanceToSun = function () {
    var distance = null;
    var distanceTemp = document.getElementById("timingOfSolarEventsDistanceToSun").value;
    var power = document.getElementById("timingOfSolarEventsDistanceToSunApplyScientificNotation").value;
    if (power != "") {
        distance = distanceTemp * Math.pow(10, power);
        // console.log("Calculated distance: " + distance);
    } else {
        distance = distanceTemp;
        // console.log("Desired distance: " + distance);
    }
    if (distance == "") {
        alert("Please enter a valid input for the distance from the sun.")
    } else {
        return distance;
    }
}

const getSpeedOfSolarWind = function () {
    var speed = null;
    var speedTemp = document.getElementById("timingOfSolarEventsSpeedOfSolarWind").value;
    var power = document.getElementById("timingOfSolarEventsSpeedOfSolarWindApplyScientificNotation").value;
    if (power != "") {
        speed = speedTemp * Math.pow(10, power);
        // console.log("Calculated speed: " + speed);
    } else {
        speed = speedTemp;
        // console.log("Desired distance: " + speed);
    }
    if (speed == "") {
        alert("Please enter a valid input for the speed of a solar event.")
    } else {
        return speed;
    }
}

const calculateEstimatedTimeOfImpact = function () {
    var distance = getDistanceToSun.call();
    var speed = getSpeedOfSolarWind.call();

    var calculateTimeUntilImpactInSeconds = (distance / speed);
    // console.log("Calculated time in seconds: " + calculateTimeInSeconds);

    var numberOfSecondsInOneDay = (60 * 60 * 24);
    // console.log("Calculated number of seconds in one day: " + numberOfSecondsInOneDay);

    var numberOfDaysUntilImpact = (calculateTimeUntilImpactInSeconds / numberOfSecondsInOneDay);
    // console.log("Estimated days until impact: " + numberOfDaysUntilImpact);

    document.getElementById("timingOfSolarEventsResult").innerHTML = "<var>T</var> = <strong>" + numberOfDaysUntilImpact.toFixed(2) + " day(s) </strong>";
}