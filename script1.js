
const url = `https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=25ba9b1776ffb6593c36f34fa561c2c2&units=metric`;

fetch(url).then((response) => {
	return response.json()
}).then((data) => {
	console.log(data)


	clouds_all1.innerHTML = data.clouds.all
	temp1.innerHTML = data.main.temp
	feels_like1.innerHTML = data.main.feels_like
	temp_min1.innerHTML = data.main.temp_min
	temp_max1.innerHTML = data.main.temp_max
	humidity3.innerHTML = data.main.humidity
	wind_speed3.innerHTML = data.wind.speed
	wind_degrees2.innerHTML = data.wind.deg
	sunrise1.innerHTML = data.sys.sunrise
	sunset1.innerHTML = data.sys.sunset
})
	.catch(err => console.error(err));


