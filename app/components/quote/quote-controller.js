(function(){

	var quoteService = new QuoteService();
	
	quoteService.getQuote(function(res){
		console.log(res);
		//What can you do with this weather object?
		$('#quote').append(`
			<h2>Quote of the Day</h2>
			<p>${res.quote}</p>
			<p id="author">${res.author}</p>
		`)
		// $('#author').hide('fast')

		
		$('#quote').on('mouseenter', function() {
			// $('#author').show('fast')
			$('#quote').empty();
			$('#quote').append(`
			<h2>Quote of the Day</h2>
			<p>${res.author}</p>
			`)
		})

		$('#quote').on('mouseleave', function() {
			// $('#author').hide('fast')
			$('#quote').empty();
			$('#quote').append(`
			<h2>Quote of the Day</h2>
			<p>${res.quote}</p>
		`)
			
		})

		


	})

	
	//Get your QuoteService
	
}())


