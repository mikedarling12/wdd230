const temp = 60;
const windSpeed = 5.0;
let feelsLikeTemp;
let feelMsg;

if (temp > 50 || windSpeed < 3.0) {
    feelsLikeTemp = "N/A";
    feelMsg = "Feels like: " + feelsLikeTemp;
} else {
    feelsLikeTemp = 35.74 + 0.6215 * temp - 35.75 * windSpeed + 0.4275 * temp * windSpeed;
    feelMsg = "Feels like: " + feelsLikeTemp + "°";
}

let tempMsg = "Temp: " + temp + "°";
let windMsg = "Wind: " + windSpeed + " mph";

let htmlContent = tempMsg + "<br>" + windMsg + "<br>" + feelMsg;

document.getElementById("weather-placeholder").innerHTML = htmlContent;