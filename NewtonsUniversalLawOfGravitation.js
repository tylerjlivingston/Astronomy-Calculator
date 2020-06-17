window.onload=function(){
    var mb = document.getElementById("newtonsUniversalLawOfGravitationSubmitButton");
    mb.addEventListener("click", calculateGravitationalForce);
}

const getMassOfObjectOne=function() {
    var mass = null;
    var massTemp = document.getElementById("newtonsUniversalLawOfGravitationMassOfObjectOne").value;
    var power = document.getElementById("newtonsUniversalLawOfGravitationMassOfObjectOneApplyScientificNotation").value;
    if (power != "") {
        mass = massTemp * Math.pow(10, power);
        console.log("Calculated mass one: " + mass);
    }else{
        mass = massTemp;
        console.log("Desired mass one: " + mass);
    }
    return mass;
}

const getMassOfObjectTwo=function() {
    var mass = null;
    var massTemp = document.getElementById("newtonsUniversalLawOfGravitationMassOfObjectTwo").value;
    var power = document.getElementById("newtonsUniversalLawOfGravitationMassOfObjectTwoApplyScientificNotation").value;
    if (power != "") {
        mass = massTemp * Math.pow(10, power);
        console.log("Calculated mass two: " + mass);
    }else{
        mass = massTemp;
        console.log("Desired mass two: " + mass);
    }
    return mass;
}

const getGravitationalConstant=function() {
    var gravitationalConstant = null;
    var gravitationalConstantTemp = document.getElementById("newtonsUniversalLawOfGravitationGravitationalConstant").value;
    var power = document.getElementById("newtonsUniversalLawOfGravitationGravitationalConstantApplyScientificNotation").value;
    if (power != "") {
        gravitationalConstant = gravitationalConstantTemp * Math.pow(10, power);
        console.log("Calculated gravitational constant: " + gravitationalConstant);
    }else{
        gravitationalConstant = gravitationalConstantTemp;
        console.log("Desired gravitational constant: " + gravitationalConstant);
    }
    return gravitationalConstant;
}

const getDistanceBetweenTwoObjects=function() {
    var distanceBetweenTwoObjects = null;
    var distanceBetweenTwoObjectsTemp = document.getElementById("newtonsUniversalLawOfGravitationDistanceBetweenTwoObjects").value;
    var power = document.getElementById("newtonsUniversalLawOfGravitationDistanceBetweenTwoObjectsApplyScientificNotation").value;
    if (power != "N/A") {
        distanceBetweenTwoObjects = distanceBetweenTwoObjectsTemp * Math.pow(10, power);
        // console.log("Calculated distance between two objects: " + distanceBetweenTwoObjects);
    }else{
        distanceBetweenTwoObjects = distanceBetweenTwoObjectsTemp;
        console.log("Desired distance between two objects: " + distanceBetweenTwoObjects);
    }
    return distanceBetweenTwoObjects;
}

const calculateGravitationalForce=function(){
    var massOne = getMassOfObjectOne.call();
    var massTwo = getMassOfObjectTwo.call();
    var gravitationalConstant = getGravitationalConstant.call();
    var distanceBetweenObjects = getDistanceBetweenTwoObjects.call();
    var numerator = (gravitationalConstant * massOne * massTwo);
    console.log("numerator: " + numerator);
    var denominator = Math.pow(distanceBetweenObjects,2);
    console.log("denominator:" + denominator);
    var gravitationalForce = (numerator/denominator);
    console.log("gravitationalForce: " + gravitationalForce);
    document.getElementById("newtonsUniversalLawOfGravitationResult").innerHTML="Gravitational Force = " + gravitationalForce.toLocaleString();
}