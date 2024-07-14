const weather = new Weather()
const ui = new UI()
const photo = new Photo()


document.getElementById("change-location").addEventListener("click",ChangeLocation)
document.addEventListener("DOMContentLoaded",getweather)
function ChangeLocation(){
    const location = document.getElementById("location-input").value
    weather.SetLocation(location)
    photo.SetPhoto(location)
    getweather()
    getphoto()
    $('#locationModal').modal('hide');
}


function getweather() {
    getphoto()
    weather.GetWeather()
        .then(result => {
            ui.DisplayWeather(result, weather.location)
        })
        .catch(error => {
            console.log(error)
        })
}

function getphoto(){
    photo.GetPhoto()
        .then(result => {
            ui.DisplayProfPhoto(result)
        })
        .catch(error => {
            console.log(error)
        })
}