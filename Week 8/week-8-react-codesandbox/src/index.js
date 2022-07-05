import React from "react";
import ReactDOM from "react-dom";

let name = "Phil";
let luckyNumber = 2;

let createdBy = "Phil White";
let currentDate = new Date();
let year = currentDate.getFullYear();

let img = "https://picsum.photos/200/?random=1";

// let newDate = new Date().getHours();
// if (newDate >= 0 && newDate <= 12) {
//   document.getElementById("test").innerHTML = "Good Morning";
// } else if (newDate >= 12 && newDate <= 24) {
//   document.getElementById("test").innerHTML = "Good Evening";
// }
// cannot work due to script loading before HTML?

let greeting;
const date = new Date();
const currentTime = date.getHours();

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}

ReactDOM.render(
  <div>
    <h1>{name}'s Consoles</h1>
    <ul>
      <li>Xbox</li>
      <li>PlayStation</li>
      <li>Nintendo</li>
    </ul>

    <hr></hr>

    <p>My lucky number is {luckyNumber}</p>

    <hr></hr>

    <p>Created by {createdBy}</p>
    <p>Copyright {year}</p>

    <hr></hr>

    <div className="image-container">
      <img src="https://picsum.photos/200?random=1" alt="image" srcset="" />
      <img src="https://picsum.photos/200?random=2" alt="image" srcset="" />
      <img src="https://picsum.photos/200?random=3" alt="image" srcset="" />
      <img src={img} />
    </div>

    <h1 id="test"> {greeting} </h1>
  </div>,

  document.getElementById("root")
);

// JSX Expression

// Task 1:
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// Task 2:
// Create a customised paragraph inside of HTML of JSX.
// It will display my lucky number using temp literals

// Task 3:
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
// Using JavaScript to pull current date and time.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// Task 4:
// Add styling to JSX Attributes
// Give color to JSX Elements
// Add images and give images same height and width.

// Task 5:
// Show single h1 that says "Good Morning", if between midnight and 12pm
