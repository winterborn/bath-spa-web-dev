console.log("Hello, Phil")

// Pseudo Code - get head around solving the actual problem in language before attempting to code

// Pseudo Code:
// if raining take raincoat
// else don't take raincoat

// Putting into JS - If Else Statements:

// let weekDay = "rain";
let weekDay = "sunny";

if (weekDay == "rain") {
    console.log("Take a raincoat!");
} else {
    console.log("Leave your raincoat at home!");
}



// Leap Year Project - If Else Statements:

// PS:
// - if divided by 4 with no remainder
// - if not divisible by 100
// - else if divided by 400 with no remainder

let year = 2004;
debugger;
if (year % 4 === 0) {
    if (year % 100 !== 0) {
        if (year % 400 === 0) {
            console.log("The year " + year + " is a Leap Year!");
        } else {
            console.log("The year " + year + " is not a Leap Year...");
        }
    } else {
        console.log("The year " + year + " is a Leap Year!");
    }
} else {
    console.log("The year " + year + " is not a Leap Year...");
}


// Conditional (ternary) operators - 3 operands : variablename=(condition)?value1:value2

let age = 17;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// becomes

let age = 17;
console.log((age >= 18) ? "you can vote" : "you can't");



// Switch Statements:

let area = "square";

const PI = 3.14;
let l = 5;
let b = 4;
let r = 3;

if (area == "circle") {
    console.log("the area of the circle is:" + PI * r ** 2);
} else if (area == "triangle") {
    console.log("the area of the triangle is:" + (l + b) / 2);
} else if (area == "rectangle") {
    console.log("the area of the rectangle is:" + (l * b));
} else {
    console.log("please enter valid data");
}

// becomes

let area = "square";

const PI = 3.14;
let l = 5;
let b = 4;
let r = 3;

switch (area) {
    case 'circle':
        console.log("the area of the circle is:" + PI * r ** 2);
        break;
    case 'triangle':
        console.log("the area of the triangle is:" + (l + b) / 2);
        break;
    case 'rectangle':
        console.log("the area of the rectangle is:" + (l * b));
        break;
    default:
        console.log("please enter valid data");
}


// While & Do Statements:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
let num = 0;

// becomes

let num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

let num = 0;
do {
    console.log(num);
    num++;
}
while (num <= 10);



// For Loops - for(initializer;condition;iteration) {}:

for (var num = 0; num <= 10; num++) {
    console.log(num);
}


// Task - JavaScript program to print table for a given number(8)

for (let num = 1; num <= 12; num++) {
    let tableOf = 8;
    console.log(tableOf + "*" + num + " = " + tableOf * num);
}