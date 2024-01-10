const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bfff116ee9mshc6d52151d1ffaddp180ff0jsnb346a28f1d20',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
async function weather(data)
{
    const response = await fetch(url+`city=${data}`, options);
	const result = await response.json();
	console.log(result);
    console.log(result.cloud_pct)
    console.log(result.sunrise)
    // // document.querySelector("city").innerHTML=data;
    // document.querySelector("temp").innerText=result.temp
    // document.querySelector("humidity").innerHTML=result.humidity
    // document.querySelector("wind").innerHTML=result.wind_speed
    temp.innerHTML=result.temp
    humidity.innerHTML=result.humidity
    wind.innerHTML=result.wind_speed
    city.innerHTML=data
    
}

searchbtn.addEventListener("click",()=>
{
    weather(searchBox.value);
})

