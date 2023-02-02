const cityInput = document.getElementById("cityInput");
var btn = document.getElementById("btn");
const apiKey = '02d16f66672b3cb35ee7c205abab4ca8';
const descriptionDom = document.getElementsByClassName("description");
const celciusDom = document.getElementsByClassName("celcius");
var cityOutput = document.getElementsByClassName("cityName");


btn.addEventListener("click",getData);

function getData(){
    let girilenSehir = cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${girilenSehir}&appid=${apiKey}&lang=tr&units=metric`)
    .then(response=>{
        return response.json();})
    .then(
        (responseJson)=>{
            changeCelcius(responseJson.main.temp)
            changeDescription(responseJson.weather[0].description);
            changeName(responseJson.name);
            
            
        }

    ).catch(()=>alert("Lütfen Şehir ismini doğru giriniz."));

}



var changeDescription =(description)=>{
    descriptionDom[0].innerHTML=description;
}
var changeCelcius = (celcius)=>{
    celciusDom[0].childNodes[0].innerHTML=celcius;
}
var changeName =(cityName)=>{
    cityOutput[0].innerHTML= cityName;
}