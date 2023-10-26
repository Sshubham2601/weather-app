const url2 = `https://api.openweathermap.org/data/2.5/weather?q=australia&appid=25ba9b1776ffb6593c36f34fa561c2c2&units=metric`;

fetch(url2).then((response) => {
	return response.json()
}).then((data) => {
	console.log(data)


	clouds_all2.innerHTML = data.clouds.all
	temp5.innerHTML = data.main.temp
	feels_like5.innerHTML = data.main.feels_like
	temp_min5.innerHTML = data.main.temp_min
	temp_max5.innerHTML = data.main.temp_max
	humidity5.innerHTML = data.main.humidity
	wind_speed5.innerHTML = data.wind.speed
	wind_degrees5.innerHTML = data.wind.deg
	sunrise5.innerHTML = data.sys.sunrise
	sunset5.innerHTML = data.sys.sunset
})
	.catch(err => console.error(err));
