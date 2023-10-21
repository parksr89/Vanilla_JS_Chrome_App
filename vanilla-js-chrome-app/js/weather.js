const  API_KEY="275805f246665125754efadab6df25f3";

function onGeoOk(postion){
    const lat =postion.coords.latitude ;
    const lon =postion.coords.longitude;
    console.log(lat, lon );
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp} °C`;
    });
}
function onGeoError(){
    alert("can't find you. No weather for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);