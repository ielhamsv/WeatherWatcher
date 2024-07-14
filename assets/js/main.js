const weather = new Weather()

weather.GetWeather()
.then(result =>{
 console.log(result)
})
.catch(error =>{
    console.log(error)
})