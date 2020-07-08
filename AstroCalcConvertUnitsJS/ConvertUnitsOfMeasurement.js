// Author: Tyler Livingston
// Start date: July 8, 2020
// Updated: July 8, 2020
// Purpose: To calculate common equations related to astronomy

define([], function () {
    defaultResult.call();

    var measurementValueOneUnit = document.getElementById("measurementValueOneUnit");
    measurementValueOneUnit.addEventListener("change", convertUnits);

    var measurementValueTwoUnit = document.getElementById("measurementValueTwoUnit");
    measurementValueTwoUnit.addEventListener("change", convertUnits);

    var measurementValueOne = document.getElementById("measurementValueOne");
    measurementValueOne.addEventListener("change", convertUnits);
});

function defaultResult() {
    document.getElementById("ConvertDistanceMeasurementsResult").innerHTML = "Enter values to convert.";
}

function convertUnits() {
    var unitToConvert = document.getElementById("measurementValueTwoUnit").value;
    var value = document.getElementById("measurementValueOne").value;
    var valueConverted = "";
    switch (document.getElementById("measurementValueOneUnit").value) {
        case "Light-year(s)":
            valueConverted = convertLightyear(unitToConvert, value);
            break;
        case "Mile(s)":
            valueConverted = convertMile(unitToConvert, value);
            break;
        case "Kilometer(s)":
            valueConverted = convertKilometer(unitToConvert, value);
            break;
        case "Astronomical Unit(s)":
            valueConverted = convertAstronomicalUnits(unitToConvert, value);
            break;
        default:
            break;
    }
    
    // Used for imput
    document.getElementById("measurementValueTwo").innerHTML = parseFloat(valueConverted);

    // Used for readability
    if (String(valueConverted).includes("e")) {
        document.getElementById("ConvertDistanceMeasurementsResult").innerHTML = value + " " + document.getElementById("measurementValueOneUnit").value + " ≈ " + parseFloat(valueConverted) + " " + unitToConvert;
    }else if (parseInt(valueConverted) < 1000) {
        document.getElementById("ConvertDistanceMeasurementsResult").innerHTML = value + " " + document.getElementById("measurementValueOneUnit").value + " ≈ " + parseFloat(valueConverted).toFixed(3) + " " + unitToConvert;
    }else {
        document.getElementById("ConvertDistanceMeasurementsResult").innerHTML = value + " " + document.getElementById("measurementValueOneUnit").value + " ≈ " + parseFloat(valueConverted).toLocaleString() + " " + unitToConvert;
    }
}

function convertLightyear(unit, value) {
    switch (unit) {
        case "Light-year(s)":
            value = value;
            break;
        case "Mile(s)":
            value = value * 5.879e+12;
            break;
        case "Kilometer(s)":
            value = value * 9.461e+12;
            break;
        case "Astronomical Unit(s)":
            value = value * 1.58125e-5;
            break;
        default:
            break;
    }
    return value;
}

function convertKilometer(unit, value) {
    switch (unit) {
        case "Light-year(s)":
            value = value * 1.057e-13;
            break;
        case "Mile(s)":
            value = value * 1.60934;
            break;
        case "Kilometer(s)":
            value = value;
            break;
        case "Astronomical Unit(s)":
            value = value * 6.68459e-9;
            break;
        default:
            break;
    }
    return value;
}

function convertMile(unit, value) {
    switch (unit) {
        case "Light-year(s)":
            value = value * 1.7011e-13;
            break;
        case "Mile(s)":
            value = value;
            break;
        case "Kilometer(s)":
            value = value * 0.621371;
            break;
        case "Astronomical Unit(s)":
            value = value * 1.07578e-8;
            break;
        default:
            break;
    }
    return value;
}

function convertAstronomicalUnits(unit, value) {
    switch (unit) {
        case "Light-year(s)":
            value = value * 1.58125e-5;
            break;
        case "Mile(s)":
            value = value * 9.296e+7;
            break;
        case "Kilometer(s)":
            value = value * 1.496e+8;
            break;
        case "Astronomical Unit(s)":
            value = value;
            break;
        default:
            break;
    }
    return value;
}