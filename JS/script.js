const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '494bd37034mshd7409e1d3248bf6p1ee0bbjsn9c84b6256368',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
//Weather Function
const getWeather=(city)=>{
	cityName=document.getElementById("cityName")
	cityName.innerHTML=city	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		
		
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		
		
		
	})
	.catch(err => console.error(err));
}
//Search Bar Event Listener
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

//Navbar weathers
Delhi =document.getElementById("Delhi")
Mumbai =document.getElementById("Mumbai")
Bangalore =document.getElementById("Bangalore")
Kolkata =document.getElementById("Kolkata")
Hyderabad =document.getElementById("Hyderabad")
Chennai =document.getElementById("Chennai")
Jaipur =document.getElementById("Jaipur")
Lucknow =document.getElementById("Lucknow")
NewYork =document.getElementById("NewYork")
Tokyo =document.getElementById("Tokyo")
London =document.getElementById("London")
Paris =document.getElementById("Paris")
Beijing =document.getElementById("Beijing")
Istanbul =document.getElementById("Istanbul")
Dubai =document.getElementById("Dubai")
Barcelona =document.getElementById("Barcelona")



Delhi.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Delhi")
})

Mumbai.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Mumbai")
})

Bangalore.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Bangalore")
})

Kolkata.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Kolkata")
})

Hyderabad.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Hyderabad")
})

Chennai.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Chennai")
})

Jaipur.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Jaipur")
})

Lucknow.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Lucknow")
})

NewYork.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("New York")
})

Tokyo.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Tokyo")
})

London.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("London")
})

Paris.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Paris")
})

Beijing.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Beijing")
})

Istanbul.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Istanbul")
})

Dubai.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Dubai")
})

Barcelona.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather("Barcelona")
})
//Default Weather
getWeather("Delhi")