// Tyler Livingston
// Created: June 29, 2020
// Updated: June 29, 2020
// - This file will calculate how long it would take to for 
// a radio broadcast to reach a distant object, from Earth.

define([], function() {
    document.getElementById("waitTimeForRadioCommunicationResult").innerHTML="Please enter data in the required feild."
    var mb = document.getElementById("waitTimeForRadioCommunicationSubmitButton");
    mb.addEventListener("click", calculateWaitTimeForRadioCommunication);
});

const getDistanceFromEarth=function() {
    var distance = document.getElementById("waitTimeForRadioCommunicationDistance").value;
    if (distance == "") {
        alert("Please enter a valid input for distance.");
    } else {
        return distance;
    }
}

const calculateWaitTimeForRadioCommunication=function() {
    var time = ((getDistanceFromEarth.call()/40067) * 0.13);
    var timeLabel = "";
    // console.log("Calculate Wait Time For Radio Communication = " + time);

    if (time < 60) {
        timeLabel = "Second(s)";
    } else if (time > 60 && time < 3600) {
        timeLabel = "Minute(s)";
        time = time / 60;
    }else if (time > 3600 && time < 86400) {
        timeLabel = "Hour(s)";
        time = time / 3600;
    }else{
        timeLabel = "Day(s)";
        time = time / 86400;
    }

    document.getElementById("waitTimeForRadioCommunicationResult").innerHTML="Wait time = <strong>" + time.toFixed(2) + " " + timeLabel + "</strong>";
}