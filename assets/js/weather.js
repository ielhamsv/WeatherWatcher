/**
 * Weather class for fetching weather data from an API.
 * This class contains methods to make API requests and retrieve
 * weather information for a specified location.
 */
class Weather{
    constructor(location="tehran") {
        this.location= location,
        this.apikey="905460c42ca8d9cb199e258e9d2f90db"
    }

    async GetWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apikey}`)
        if(response.ok){
            const data = await response.json()
            return data
        } else {
            throw Error(response.status)
        }
    }

    SetLocation(location){
        this.location= location
    }
}