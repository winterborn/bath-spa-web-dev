
const fetch_btn = document.getElementById('myBtn');
const sw_result = document.getElementById('beautify');
fetch_btn.addEventListener('click', getData);


function getData() {

    url = "https://swapi.dev/api/people/";
    fetch(url).then((Response) => {
            console.log("Promise done");
            return Response.json();
        })

        .then((data) => {
            console.log("After getting data");
            console.log(data.results);

            // loop through array objects
            for (let i = 0; i < data.results.length; i++) {
                let obj = data.results[i];

                console.log(obj.name);
                // sw_result.innerHTML += (obj.name + "<br>");
                sw_result.innerHTML += (obj.name + " " + " // " + " " + obj.birth_year + "<br>");

            }
        });

}

console.log("Before fetching data");
getData();