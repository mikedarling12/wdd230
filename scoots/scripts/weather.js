const weatherInfo = document.querySelector('#weather-card');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51160596197596&lon=-86.95003565940613&appid=8027ee3a3fb6d53b5a149d9df215a859';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    var sectionTitle = "<h3>Local Weather</h3>";
    var currentTemp = `${data.main.temp}&deg;F`;
    var weatherDesc = data.weather[0].description;
    var humidity = data.main.humidity;
    weatherInfo.innerHTML = sectionTitle + "<p>" + currentTemp + " - " + weatherDesc + "</p><p>Humidity: " + humidity + "</p>";
}

apiFetch();