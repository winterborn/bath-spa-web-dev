 // API for get requests
 let fetchRes = fetch("exercise.json");


 // fetchRes is the promise to resolve it by using.then() method
 fetchRes.then(response =>
     response.json())
     .then(data => {
     console.log(data)
 })