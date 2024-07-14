const weather = new Weather()
const ui = new UI()
weather.GetWeather()
.then(result =>{
 ui.DisplayWeather(result,weather.location)
})
.catch(error =>{
    console.log(error)
})