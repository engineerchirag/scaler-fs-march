const inputRef = document.querySelector(".searchField");
const buttonRef = document.querySelector('button[type="submit"]');
const tempRef = document.querySelector(".weather .temp");
const locationRef = document.querySelector(".weather .time_location p");
const dateRef = document.querySelector(".weather .time_location span");
const conditionIconRef = document.querySelector(".weather .weather_condition p img");
const conditionTextRef = document.querySelector(".weather .weather_condition span");

buttonRef.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(inputRef.value);
  fetchWeatherData(inputRef.value);
});

function fetchWeatherData(city) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${city}`
  )
    .then((res) => res.json())
    .then((data) => setWeatherData(data));
}

function setWeatherData(data) {
  tempRef.innerText = data.current.temp_c;
  locationRef.innerText = data.location.name;
  conditionIconRef.src = data.current.condition.icon;
  dateRef.innerText = data.location.localtime;
  conditionTextRef.innerText = data.current.condition.text;
}
