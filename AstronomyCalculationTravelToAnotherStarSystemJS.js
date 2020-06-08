window.onload=function(){
    var mb = document.getElementById("travelToAnotherStarSystemSubmitButton");
    mb.addEventListener("click", amountOfTimeInMetric);
    mb.addEventListener("click", amountOfTimeInStandard);
    mb.addEventListener("click", convertMilesToAstronomicalUnit);
}

const thisIsATestFunction = function(){
    console.log("This is a test!");
}

const distanceToOtherStarSystemInLightyears = function(){
    return 39.46; //Enter the distance to the other planet in lightyears
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

const getSpeedOfSpacecraftInMPH = function(){
    return 24790; //Enter speed of spacecraft (MPH)
}

const getSpeedOfSpacecraftInKmPH = function(){
    return 39897; //Enter speed of spacecraft (KmPH)
}

const amountOfTimeInStandard = function(){
    var hoursPerLightYearStandard = (getLightyearInMiles.call() / getSpeedOfSpacecraftInMPH.call());
    var yearsToTravelOneLightYearAtSpacecraftsTopSpeedInStandard = (hoursPerLightYearStandard / getNumberOfHoursInOneYear.call());
    var amountOfTimeInStandard = Math.round((distanceToOtherStarSystemInLightyears.call() * yearsToTravelOneLightYearAtSpacecraftsTopSpeedInStandard));
    console.log("The amount of time it would take to travel to another palnet at the speed of " + getSpeedOfSpacecraftInMPH.call() + " MPH would be about " + amountOfTimeInStandard + " years.");
}

const amountOfTimeInMetric = function(){
    var hoursPerLightYearMetric = (getLightyearInKilometers.call() / getSpeedOfSpacecraftInKmPH.call());
    var yearsToTravelOneLightYearAtSpacecraftsTopSpeedInMetric = (hoursPerLightYearMetric / getNumberOfHoursInOneYear.call());
    var amountOfTimeInMetric = Math.round((distanceToOtherStarSystemInLightyears.call() * yearsToTravelOneLightYearAtSpacecraftsTopSpeedInMetric));
    console.log("The amount of time it would take to travel to another palnet at the speed of " + getSpeedOfSpacecraftInKmPH.call() + " KmPH would be about " + amountOfTimeInMetric + " years.");
}