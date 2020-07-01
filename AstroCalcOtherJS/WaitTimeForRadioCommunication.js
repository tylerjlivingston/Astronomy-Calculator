// Tyler Livingston
// Created: June 29, 2020
// Updated: June 29, 2020
// - 

define([], function() {
    var mb = document.getElementById("waitTimeForRadioCommunicationSubmitButton");
    mb.addEventListener("click", calculateWaitTimeForRadioCommunication);
});

const getDistanceFromEarth=function() {
    var diameter = document.getElementById("waitTimeForRadioCommunicationDistance").value;
    return diameter;
}

const calculateWaitTimeForRadioCommunication=function() {
    var time = ((getDistanceFromEarth.call()/40067) * 0.13);
    console.log("calculateWaitTimeForRadioCommunication = " + time);
    if (time < 60) {
        document.getElementById("waitTimeForRadioCommunicationResult").innerHTML="Time = " + time + "(Second(s))";
    } else if (time > 60 && time < 3600) {
        document.getElementById("waitTimeForRadioCommunicationResult").innerHTML="Time " + time + "(Minute(s))";
    }else if (time > 3600 && time < 86400) {
        document.getElementById("waitTimeForRadioCommunicationResult").innerHTML="Time " + time + "(Hours(s))";
    }else{
        document.getElementById("waitTimeForRadioCommunicationResult").innerHTML="Time " + time + "(Days(s))";
    }
}