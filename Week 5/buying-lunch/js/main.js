//Array
const players = [
    document.querySelector(".name1").innerHTML,
    document.querySelector(".name2").innerHTML,
    document.querySelector(".name3").innerHTML,
    document.querySelector(".name4").innerHTML,
    document.querySelector(".name5").innerHTML,
    document.querySelector(".name6").innerHTML,
    document.querySelector(".name7").innerHTML,
    document.querySelector(".name8").innerHTML,
];

//Random Name Picker
function randomName() {
    let lunchBuyer = Math.floor(Math.random() * players.length);
    return players[lunchBuyer] + " is going to buy lunch today!";
}

//HTML Output
const btnClick = [""];
document
    .getElementById("btn")
    .addEventListener("click", function fillHtml() {
        document.getElementById("result").innerHTML = btnClick.fill(randomName());
    });