

const getWeather = (city) => {
	cityName.innerHTML = city
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25ba9b1776ffb6593c36f34fa561c2c2&units=metric`;

	fetch(url).then((response) => {
		return response.json()
	}).then((data) => {
		console.log(data)

		clouds_all.innerHTML = data.clouds.all
		temp.innerHTML = data.main.temp
		temp2.innerHTML = data.main.temp
		feels_like.innerHTML = data.main.feels_like
		temp_min.innerHTML = data.main.temp_min
		temp_max.innerHTML = data.main.temp_max
		humidity.innerHTML = data.main.humidity
		humidity2.innerHTML = data.main.humidity
		wind_speed.innerHTML = data.wind.speed
		wind_speed2.innerHTML = data.wind.speed
		wind_degrees.innerHTML = data.wind.deg
		sunrise.innerHTML = data.sys.sunrise
		sunset.innerHTML = data.sys.sunset
	})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Jharkhand")

