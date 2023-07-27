updateDateTime();

function updateDateTime() {
    var dateTimeElement = document.getElementById('date-time');
    var currentDate = new Date();

    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    };

    var formattedDate = currentDate.toLocaleDateString(undefined, options);
    dateTimeElement.textContent = formattedDate;

    setTimeout(updateDateTime, 1000); 
}

function updateCity(event) {
    event.preventDefault();
    let city = "${newCity}";
    let input = document.querySelector("#cityInput");
    let newCity = input.value.trim();

    if (newCity !== "") {
        let apiKey = "e83a7248f50d7484d5f8442f21107b5b"; // Replace with your API key
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=${apiKey}`;

        axios.get(apiUrl).then(showTemperature);

        let h1 = document.querySelector("#city");
        h1.innerHTML = newCity;

        input.value = "";
    }
}

function showTemperature(response) {
            let weatherData = response.data;
            let temperature = Math.round(weatherData.main.temp);
            let weatherDescription = weatherData.weather[0].description;
            let windSpeed = weatherData.wind.speed;

            let temperatureElement = document.querySelector("#temperature");
            temperatureElement.innerHTML = `${temperature}<sup>°C│°F</sup>`;

            let weatherDescriptionElement = document.querySelector(".date-weather");
            weatherDescriptionElement.textContent = weatherDescription;

            let windSpeedElement = document.querySelector(".info");
            windSpeedElement.innerHTML = `Precipitation: ${weatherData.main.humidity}%<br>
                                          Humidity: ${weatherData.main.humidity}%<br>
                                          Wind Speed: ${windSpeed} km/h<br>`;

            let weatherIconElement = document.querySelector(".weather-icon");
            let iconCode = weatherData.weather[0].icon;
            let iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            weatherIconElement.setAttribute("src", iconUrl);
        }

        

let isCelsius = true;

function convertTemperature() {
            let temperatureElement = document.querySelector("#temperature");
            let temperatureValue = parseFloat(temperatureElement.textContent);
          
            if (isCelsius) {
            
                let fahrenheitTemp = (temperatureValue * 9/5) + 32;
                temperatureElement.innerHTML = `${fahrenheitTemp.toFixed(0)}<sup>°F│°C</sup>`; 
            } else {
                
                let celsiusTemp = (temperatureValue - 32) * 5/9;
                temperatureElement.innerHTML = `${celsiusTemp.toFixed(0)}<sup>°C│°F</sup>`; 
            }
        
            isCelsius = !isCelsius;
        }
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.addEventListener("click", convertTemperature);
    

function showTemperature(response) {
            let weatherData = response.data;
            let temperature = Math.round(weatherData.main.temp);
            let weatherDescription = weatherData.weather[0].description;
            let windSpeed = weatherData.wind.speed;

            let temperatureElement = document.querySelector("#temperature");
            temperatureElement.innerHTML = `${temperature}<sup>°C│°F</sup>`;

            let weatherDescriptionElement = document.querySelector(".date-weather");
            weatherDescriptionElement.textContent = weatherDescription;

            let windSpeedElement = document.querySelector(".info");
            windSpeedElement.innerHTML = `Precipitation: ${weatherData.main.humidity}%<br>
                                          Humidity: ${weatherData.main.humidity}%<br>
                                          Wind Speed: ${windSpeed} km/h<br>`;

            let weatherIconElement = document.querySelector(".weather-icon");
            let iconCode = weatherData.weather[0].icon;
            let iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            weatherIconElement.setAttribute("src", iconUrl);
        };

    // Update the weather icon
    let apiKey = "e83a7248f50d7484d5f8442f21107b5b";
    let city = "Johannesburg";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(showTemperature);



    // ... Your existing code to extract other weather data ...
    let weatherData = response.data;
    let weatherIconElement = document.querySelector(".weather-icon");
    let iconCode = weatherData.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    weatherIconElement.setAttribute("src", iconUrl);


let h1 = document.querySelector("#city");
h1.innerHTML = city;

let url = "https://jsonplaceholder.typicode.com/users/1";
axios.get(apiUrl).then(showTemperature);


// Existing code...

// Add a variable to keep track of the current temperature unit (Celsius or Fahrenheit).

// Function to convert the temperature between Celsius and Fahrenheit.
function convertTemperature() {
            let temperatureElement = document.querySelector("#temperature");
            let temperatureValue = parseFloat(temperatureElement.textContent);
          
            if (isCelsius) {
                // Convert Celsius to Fahrenheit: (°C * 9/5) + 32
                let fahrenheitTemp = (temperatureValue * 9/5) + 32;
                temperatureElement.innerHTML = `${fahrenheitTemp.toFixed(0)}<sup>°F│°C</sup>`; // Rounded off to the nearest whole number
            } else {
                // Convert Fahrenheit to Celsius: (°F - 32) * 5/9
                let celsiusTemp = (temperatureValue - 32) * 5/9;
                temperatureElement.innerHTML = `${celsiusTemp.toFixed(0)}<sup>°C│°F</sup>`; // Rounded off to the nearest whole number
            }
          
            // Toggle the temperature unit flag.
            isCelsius = !isCelsius;
        }