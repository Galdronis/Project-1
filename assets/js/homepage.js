var baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.9622601&lon=-83.0007065&units=imperial&appid=386bacec31981402aa86b34dbee56885';
var currentTemp = document.getElementById('current-temp')
var humidity = document.getElementById('humidity')
var feelsLike = document.getElementById('feels-like')
var windSpeed = document.getElementById('wind-speed')
var weatherConditions = document.getElementById('weather-conditions')



function getApi() {

  fetch(baseUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var current = data.current.temp
    var red = data.current.humidity
    var blue = data.current.feels_like
    var green = data.current.wind_speed
    var yellow = data.current.weather[0].icon
    currentTemp.textContent = current + '°F'
    humidity.textContent = red + '%'
    feelsLike.textContent = blue + '°'
    windSpeed.textContent = green + " mph"
    currentTemp.setAttribute("class", "current2")
    humidity.setAttribute("class", "current")
    feelsLike.setAttribute("class", "current")
    windSpeed.setAttribute("class", "current")
    weatherConditions.src = 'http://openweathermap.org/img/wn/' + yellow + '@2x.png'
  }) 
};

getApi()

