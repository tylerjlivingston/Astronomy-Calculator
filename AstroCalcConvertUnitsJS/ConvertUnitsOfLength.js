// Author: Tyler Livingston
// Start date: July 8, 2020
// Updated: July 8, 2020
// Purpose: To calculate common equations related to astronomy

define([], function () {
    defaultResult.call();

    var lengthValueOneUnit = document.getElementById("lengthValueOneUnit");
    lengthValueOneUnit.addEventListener("change", convertUnits);

    var lengthValueTwoUnit = document.getElementById("lengthValueTwoUnit");
    lengthValueTwoUnit.addEventListener("change", convertUnits);

    var lengthValueOne = document.getElementById("lengthValueOne");
    lengthValueOne.addEventListener("change", convertUnits);
});

function defaultResult() {
    convertUnits.call();
}

function convertUnits() {
    var unitToConvert = document.getElementById("lengthValueTwoUnit").value;
    var value = document.getElementById("lengthValueOne").value;
    var valueConverted = "";
    switch (document.getElementById("lengthValueOneUnit").value) {
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
    document.getElementById("lengthValueTwo").innerHTML = parseFloat(valueConverted);

    // Used for readability
    if (String(valueConverted).includes("e")) {
        document.getElementById("ConvertDistanceLengthResult").innerHTML = value + " " + document.getElementById("lengthValueOneUnit").value + " ≈ " + parseFloat(valueConverted) + " " + unitToConvert;
    }else if (parseInt(valueConverted) < 1000) {
        document.getElementById("ConvertDistanceLengthResult").innerHTML = value + " " + document.getElementById("lengthValueOneUnit").value + " ≈ " + parseFloat(valueConverted).toFixed(3) + " " + unitToConvert;
    }else {
        document.getElementById("ConvertDistanceLengthResult").innerHTML = value + " " + document.getElementById("lengthValueOneUnit").value + " ≈ " + parseFloat(valueConverted).toLocaleString() + " " + unitToConvert;
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
            value = value / 1.60934;
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
            value = value * 1.60934;
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