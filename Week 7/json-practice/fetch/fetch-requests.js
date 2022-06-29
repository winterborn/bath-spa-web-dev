// First fetch will be done by local JSON file / text file

// console.log("Hello Phil");

// function getData() {

//     url = "exercise.json";
//     fetch(url).then((Response) => {
//         console.log("Promise done");
//         return Response.json();
//     })
//         .then((data)=>{
//             console.log("After getting data");
//             console.log(data);
//         })

// }

// console.log("Before fetching data");
// getData();




// Second fetch will be done by API

// const fetch_btn = document.getElementById('myBtn');
// fetch_btn.addEventListener('click', getData);
// document.getElementById("beautify").innerHTML = JSON.stringify(data);



// console.log("Hey Phil");

// function getData() {

//     url = "https://api.github.com/users";
//     fetch(url).then((Response) => {
//         console.log("Promise done");
//         return Response.json();
//     })
//         .then((data)=>{
//             console.log("After getting data");
//             console.log(data);
//         })

// }

// console.log("Before fetching data");
// getData();




// Third fetch will be done by API - dog images

// https://random.dog/woof.json

const fetch_btn = document.getElementById('myBtn');
const dog_result = document.getElementById('beautify');
fetch_btn.addEventListener('click', getData);

console.log("Hey Phil");

function getData() {

    url = "https://random.dog/woof.json";
    fetch(url).then((Response) => {
            console.log("Promise done");
            return Response.json();
        })

        .then((data) => {
            console.log("After getting data");
            console.log(data);

            dog_result.innerHTML = `<img src=${data.url} alt="dog-img"/>`
        });

}

console.log("Before fetching data");
getData();