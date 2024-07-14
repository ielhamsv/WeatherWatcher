const weather = new Weather()
const ui = new UI()
const photo = new Photo()
const background= new Background()


document.getElementById("change-location").addEventListener("click",ChangeLocation)
document.addEventListener("DOMContentLoaded",function (){
    SetWeatherStatus()
    SetStatus()
})
function ChangeLocation(){
    const location = document.getElementById("location-input").value
    weather.SetLocation(location)
    photo.SetPhoto(location)
    SetStatus()
    SetWeatherStatus()
    $('#locationModal').modal('hide');
}


async function SetStatus() {
    try {
        await getphoto();
        await getbg();
        const weatherData = await weather.GetWeather();
        ui.DisplayWeather(weatherData, weather.location);
    } catch (error) {
        console.log(error);
    }
}



async function getphoto(){
    try {
        const photoData = await photo.GetPhoto();
        ui.DisplayProfPhoto(photoData);
    } catch (error) {
        console.log(error);
    }
}

async function getbg(){
    try {
        const bgData = await background.GetBg();
        ui.DisplayBG(bgData);
    } catch (error) {
        console.log(error);
    }
}

async function SetWeatherStatus() {
    try {
        const Location = weather.location;
        const WeatherData = await weather.GetWeather();
        background.SetPhoto(WeatherData.weather[0].main)
    } catch (error) {
        console.log(error);
    }
}