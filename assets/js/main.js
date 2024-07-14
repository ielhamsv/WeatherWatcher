const weather = new Weather()
const ui = new UI()

document.getElementById("change-location").addEventListener("click",ChangeLocation)
document.addEventListener("DOMContentLoaded",getweather)
function ChangeLocation(){
    const location = document.getElementById("location-input").value
    weather.SetLocation(location)
    getweather()
    $('#locationModal').modal('hide');
}


function getweather() {
    weather.GetWeather()
        .then(result => {
            ui.DisplayWeather(result, weather.location)
        })
        .catch(error => {
            console.log(error)
        })
}