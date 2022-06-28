let fetchTest = fetch("weather.json"); // call a filepath or url
    .then(response => {
        // response is in here but does not have access to JSON data yet
        return response.json()
    })
    .then(data => {
        // here you have access to JSON data; data is JSON - JavaScript object
    })
    .catch((error) => {
        // handle error in here
        console.log(error)
    }) 
