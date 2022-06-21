// bmi calculator - initial scripting

// let inputWeight = prompt("What is your weight in kg?");
// let inputHeight = prompt("What is your height in m?")

// let weight = parseInt(inputWeight);
// let height = parseFloat(inputHeight);

// function bmiCalc(weight, height) {

//     const formula = weight / (height * height);
//     return Math.round(formula);
// }

// bmiCalc(weight, height);



// js experiments

// math.pow // exponent - i.e. 2 to the power of 2
// math.round // rounded to the nearest integer
// parseFloat // parses full number including decimal values
// parseInt // parses just initial integer



// js link to page

const btn = document.getElementById('calculate');
btn.addEventListener('click', function () {


    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if (height == '' || weight == '') {
        alert('Fill out the input fields');
        return;
    }


    height = height / 100

    let forumla = (weight / (height * height));

    formula = Math.round(forumla);

    document.querySelector('#result').innerHTML = formula;


    let status = ' ';

    if (formula < 19) {
        status = "underweight";
    }
    if (formula >= 19 && formula < 25) {
        status = "a normal weight";
    }
    if (formula >= 25 && formula < 30) {
        status = "overweight";
    }
    if (formula >= 30) {
        status = "obese";
    }

    document.querySelector('.comment').innerHTML = `Comment: Your BMI is <span id="comment"> ${status} </span>`;

});