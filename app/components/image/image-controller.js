(function(){

	var imageService = new ImageService();
	
	imageService.getImage(function(res){
		console.log(res)
		var url = res.url;
		if(res.large_url){
			url = res.large_url;
		}
		$('#image').css({
			background: `url(${url})`,
			'background-size': 'cover',
			'background-position': 'center center',
			color: '#fff'
		})
		//What can you do with this weather object?
	})	
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
}())
