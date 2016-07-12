(function () {

	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);

		var far = true;

		$('#weather').on('click', function () {
			$('#weather').empty()
			if (far) {
				$('#weather').append(`
				<h2>Weather</h2>
					<h4>${weather.name}</h4>
					<h3>${Math.round((weather.main.temp * 9 / 5) - 459.67)} &#176F</h3>
					<h5>${weather.weather[0].description}</h5>
					`);
				far = false;
			} else {
				$('#weather').append(`
				<h2>Weather</h2>
				<h4>${weather.name}</h4>
				<h3>${Math.round(weather.main.temp - 273.15)} &#176C</h3>
				<h5>${weather.weather[0].description}</h5>
				`);
				far = true;
			}


		});

		function update() {
			$('#weather').click()
		}
		update();






		// $('#weather').append(`
		// 	<h2>Weather</h2>
		//  	<h4>${weather.name}</h4>
		//  	<h3>${Math.round((weather.main.temp *9/5)-459.67)} &#176F</h3>
		//  	<h5>${weather.weather[0].description}</h5>
		// `)

		// $('#weather').on('click', function() {
		// 	$('#weather').empty();
		// 	$('#weather').append(`
		// 	<h2>Weather</h2>
		//  	<h4>${weather.name}</h4>
		//  	<h3>${Math.round(weather.main.temp - 273.15)} &#176C</h3>
		//  	<h5>${weather.weather[0].description}</h5>
		// `)

		// })


	})





} ())
