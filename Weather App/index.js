const inputEl = document.getElementById("input-el");
const searchEl = document.getElementById("search-el");
const tempEl = document.querySelector(".temp-el");
const cityEl = document.querySelector(".city-el");
const humidityEl = document.querySelector(".humidity-el");
const windEl = document.querySelector(".wind-el");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "9843f98e4b322474e684c79966625544";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    cityEl.innerHTML = data.name;
    tempEl.innerHTML = data.main.temp + "°";
    humidityEl.innerHTML = data.main.humidity + "%";
    windEl.innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
inputEl.addEventListener(
  "submit",
  function (e) {
    e.target.value;
    inputEl.value = "";
  },

  searchEl.addEventListener("click", function () {
    checkWeather(inputEl.value);
  })
);
