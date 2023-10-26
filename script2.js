const url1 = `https://api.openweathermap.org/data/2.5/weather?q=california&appid=25ba9b1776ffb6593c36f34fa561c2c2&units=metric`;

fetch(url1).then((response) => {
	return response.json()
}).then((data) => {
	console.log(data)
	clouds_all4.innerHTML = data.clouds.all
	temp4.innerHTML = data.main.temp
	feels_like4.innerHTML = data.main.feels_like
	temp_min4.innerHTML = data.main.temp_min
	temp_max4.innerHTML = data.main.temp_max
	humidity4.innerHTML = data.main.humidity
	wind_speed4.innerHTML = data.wind.speed
	wind_degrees4.innerHTML = data.wind.deg
	sunrise4.innerHTML = data.sys.sunrise
	sunset4.innerHTML = data.sys.sunset
})
	.catch(err => console.error(err));
