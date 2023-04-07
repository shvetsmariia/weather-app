const weatherAPI = {
    "apiKey": "7b9ed0adf4304cd5aab145440230604",
    fetchWeather: function (city) {
        fetch("http://api.weatherapi.com/v1/current.json?key=7b9ed0adf4304cd5aab145440230604&q=" + city + "&aqi=no")
        .then((responce) => responce.json())
        .then((data) => this.displayWeather(data)); 
    },
    displayWeather: function(data) {
          const { name } = data.location; 
          const { text, icon } = data.current.condition;
          const { temp_c, temp_f, humidity, wind_kph } = data.current; 
          
          document.querySelector('.city').innerText = name; 
          document.querySelector('.description').innerText = text; 
          document.querySelector('.icon').src = icon; 
          document.querySelector('.temp').innerText = temp_c.toFixed(0) + "°C" + " / " + temp_f.toFixed(0) + "°F"; 
          document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%"; 
          document.querySelector('.wind').innerText = "Wind speed: " + wind_kph + "km/h";

          document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);  
    }
};

document.querySelector('.search button').addEventListener("click", () => { weatherAPI.search()}); 
document.querySelector('.search-bar').addEventListener("keyup", (event) => { 
    if (event.key == "Enter") {
        weatherAPI.search()
    }
}); 

weatherAPI.fetchWeather("Chicago");