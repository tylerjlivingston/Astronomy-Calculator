// Author: Tyler Livingston
// Start date: July 8, 2020
// Updated: July 8, 2020
// Purpose: To calculate common equations related to astronomy

define([], function () {
    defaultconvertTemperatureValuesResult.call();

    var temperatureValueOneUnit = document.getElementById("temperatureValueOneUnit");
    temperatureValueOneUnit.addEventListener("change", convertTemperatureValues);

    var temperatureValueTwoUnit = document.getElementById("temperatureValueTwoUnit");
    temperatureValueTwoUnit.addEventListener("change", convertTemperatureValues);

    var temperatureValueOne = document.getElementById("temperatureValueOne");
    temperatureValueOne.addEventListener("change", convertTemperatureValues);
});

function defaultconvertTemperatureValuesResult() {
    document.getElementById("ConvertDistanceTemperatureResult").innerHTML = "Enter values to convert.";
}

function convertTemperatureValues() {
    var unitToConvert = document.getElementById("temperatureValueTwoUnit").value;
    var value = document.getElementById("temperatureValueOne").value;
    var valueConverted = "";
    switch (document.getElementById("temperatureValueOneUnit").value) {
        case "Fahrenheit (F)":
            valueConverted = convertFahrenheit(unitToConvert, value);
            break;
        case "Celsius (C)":
            valueConverted = convertCelsius(unitToConvert, value);
            break;
        case "Kelvin (K)":
            valueConverted = convertKelvin(unitToConvert, value);
            break;
        default:
            break;
    }

    // Used for imput
    document.getElementById("temperatureValueTwo").innerHTML = parseFloat(valueConverted);

    // Used for readability
    document.getElementById("ConvertDistanceTemperatureResult").innerHTML = value + " " + document.getElementById("temperatureValueOneUnit").value + " ≈ " + parseFloat(valueConverted).toFixed(3) + " " + unitToConvert;
}

function convertFahrenheit(unit, value) {
    switch (unit) {
        case "Fahrenheit (F)":
            value = value;
            break;
        case "Celsius (C)":
            value = (value - 32) * 5/9;
            break;
        case "Kelvin (K)":
            value = (value - 32) * 5/9 + 273.15;
            break;
        default:
            break;
    }
    return value;
}

function convertCelsius(unit, value) {
    switch (unit) {
        case "Fahrenheit (F)":
            value = (value * 9/5) + 32;
            break;
        case "Celsius (C)":
            value = value;
            break;
        case "Kelvin (K)":
            value = value + 273.15;
            break;
        default:
            break;
    }
    return value;
}

function convertKelvin(unit, value) {
    switch (unit) {
        case "Fahrenheit (F)":
            value = (value - 273.15) * 9/5 + 32;
            break;
        case "Celsius (C)":
            value = value - 273.15;
            break;
        case "Kelvin (K)":
            value = value;
            break;
        default:
            break;
    }
    return value;
}