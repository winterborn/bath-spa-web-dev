
let ageCheck = prompt("How old are you?");
currentAge = (parseInt(ageCheck));

function lifeInTime(currentAge) {

    let yearsRemaining = 90 - currentAge;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left until you are 90 years old.")

};

lifeInTime(currentAge);