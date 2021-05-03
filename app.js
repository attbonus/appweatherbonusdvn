window.addEventListener("load", () => {
    //variables//
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let locationIcon = document.querySelector('.weather-icon');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;



            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=es&appid=ecb27da4fb56a487803d0e2360f4d5c8`;



            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {
                        temp
                    } = data.main;

                    const {
                        description
                    } = data.weather[0];


                    const {
                        icon
                    } = data.weather[0];

                    //DOM//
                    temperatureDescription.textContent = description;
                    temperatureDegree.textContent = temp;
                    locationTimezone.textContent = data.name;
                    locationIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png">`;
                   


                });
        });
    }
});

//await,async y fetch,function asincronaw3schools,///