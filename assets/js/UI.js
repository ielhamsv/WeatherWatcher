class UI{
    constructor() {
        this.profile_pic=document.getElementById("profile-pic")
        this.background=document.getElementById("background")
        this.min_temp=document.getElementById("min-temp")
        this.max_temp=document.getElementById("max-temp")
        this.pressure=document.getElementById("pressure")
        this.humidity=document.getElementById("humidity")
        this.wind=document.getElementById("wind")
        this.temp=document.getElementById("temp")
        this.status=document.getElementById("status")
        this.icon=document.getElementById("icon")
        this.location=document.getElementById("location")
    }

    DisplayWeather(weather,loc){
        this.location.textContent= loc
        this.min_temp.textContent=`${this.kelvinToCelsius(weather.main.temp_min)}°`
        this.max_temp.textContent=`${this.kelvinToCelsius(weather.main.temp_max)}°`
        this.pressure.textContent=weather.main.pressure
        this.humidity.textContent=weather.main.humidity
        this.wind.textContent=weather.wind.speed
        this.temp.textContent=`${this.kelvinToCelsius(weather.main.temp)}°`
        this.status.textContent=weather.weather[0].main
        this.icon.setAttribute("src",`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`)
    }
    kelvinToCelsius(kelvin) {
        return (kelvin - 273.15).toFixed(1);
    }

    DisplayProfPhoto(photo){
        this.profile_pic.style.backgroundImage =`url(${photo.urls.regular})`
    }
    DisplayBG(bg){
        this.background.style.backgroundImage =`url(${bg.hits[0].webformatURL})`
    }
}