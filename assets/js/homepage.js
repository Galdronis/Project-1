var baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.9622601&lon=-83.0007065&units=imperial&appid=386bacec31981402aa86b34dbee56885';
var currentTemp = document.getElementById('current-temp')
var tempHigh = document.getElementById('temp-high')
var tempLow = document.getElementById('temp-low')
var windSpeed = document.getElementById('wind-speed')
var humidityPercent = document.getElementById('humidity-percent')



function callApi() {
  fetch(baseUrl)
  then(function (response) {
    console.log(response);
      if (response.ok) {
        response.json().then(function(data) {
          console.log(data)
          displayCurrentDay()
        })
      }
  })
};


function displayCurrentDay(data) {
  var inputValue =inputEl.value
  currentDay.innerHTML = '';
  var h1El = document.createElement ('h1');
  h1El.textContent = inputValue; 
  //plug into function
  var h1 = document.createElement('h1');
  h1.textContent = data.current.temp;
  currentDay.append(h1);
  currentDay.append(h1El);
}
