const weatherInfo = document.querySelector('#weather-info');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=46.210044703088556&lon=-119.11843909915196&appid=8027ee3a3fb6d53b5a149d9df215a859';

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
    var iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather img");
    var currentTemp = `${data.main.temp}&deg;F`;
    var weatherDesc = data.weather[0].description;
    weatherInfo.innerHTML = currentTemp + " - " + weatherDesc;
    //captionsDesc.textContent = `${desc}`;
}

apiFetch();