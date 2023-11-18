const weatherInfo1 = document.querySelector('#weather-placeholder1');
const weatherInfo2 = document.querySelector('#weather-placeholder2');
const weatherInfo3 = document.querySelector('#weather-placeholder3');
const todaysDate = document.querySelector('#todays-date');
const tomorrowsDate = document.querySelector('#tomorrows-date');
const nextDayDate = document.querySelector('#next-day-date');
//const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.210044703088556&lon=-119.11843909915196&cnt=17&appid=8027ee3a3fb6d53b5a149d9df215a859';

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
    var today = new Date();
    var currentTempModule = data.list[0];
    var currentTemp = `${currentTempModule.main.temp}&deg;F`;
    var weatherDesc = currentTempModule.weather[0].description;
    weatherInfo1.innerHTML = currentTemp + " - " + weatherDesc;
    todaysDate.innerHTML = today.toDateString();
    
    var tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    var currentTempModule = data.list[8];
    var currentTemp = `${currentTempModule.main.temp}&deg;F`;
    var weatherDesc = currentTempModule.weather[0].description;
    weatherInfo2.innerHTML = currentTemp + " - " + weatherDesc;
    tomorrowsDate.innerHTML = tomorrow.toDateString();
    
    var nextDay = new Date(tomorrow);
    nextDay.setDate(tomorrow.getDate() + 1);
    var currentTempModule = data.list[16];
    var currentTemp = `${currentTempModule.main.temp}&deg;F`;
    var weatherDesc = currentTempModule.weather[0].description;
    weatherInfo3.innerHTML = currentTemp + " - " + weatherDesc;
    nextDayDate.innerHTML = nextDay.toDateString();
}

apiFetch();