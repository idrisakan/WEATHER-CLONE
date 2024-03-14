const cityInput = document.querySelector(".inputText");
const btn  = document.querySelector(".btn");

/* addEventListener
! olay ne olduğunda gerekleecek ?
! olay gerekleştikten sonra ne olacak ?
 */

btn.addEventListener("click" , () =>{
   // console.log("tiklandi")

   const cityName = cityInput.value

    //console.log(cityName)
    getData(cityName)
})

function getData(name) {
    const API = "13dd4eb8fa4e5e55ccd0cd55f686a9c4";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
  //  console.log(baseURL)

fetch(baseURL)
.then(res => res.json())
.then(data => {
    const{name, sys:{country}, main: {temp,feels_like,humidity}, weather:[{description}], wind:{speed}} =data;
    console.log(name, country, temp, feels_like, humidity, description, speed)

    // veriler js çekme
    const city = document.querySelector(".city")
    const temperature = document.querySelector(".temp")
    const hum = document.querySelector(".humidity")
    const wind = document.querySelector(".wind")
    const weatherDesc = document.querySelector(".weather")
    const feeling= document.querySelector(".feeling")
    console.log(city, temperature, hum, wind,weatherDesc, feeling)

    //js'e çekilen elemanları yerine yerletirme

    city.textContent = `${name}, ${country}` ;
    temperature.textContent = `${temp.toFixed(0)}°` ;
    hum.innerHTML = `Nem: %${humidity}` ;
    wind.textContent = `Rüzgar: ${speed}km/s` ;
    weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`
    feeling.textContent = `Hissedilen : ${feels_like}`



})
.catch(err => console.log(err))

cityInput.value = "";
cityInput.focus();
}

