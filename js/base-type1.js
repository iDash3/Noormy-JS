$().ready(function(){
	$('fb-logout-item').hide()	
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
	    // the user is logged in and has authenticated your
	    // app, and response.authResponse supplies
	    // the user's ID, a valid access token, a signed
	    // request, and the time the access token 
	    // and signed request each expire
	    var uid = response.authResponse.userID;
	    var accessToken = response.authResponse.accessToken;
		$('#fb-login-item').hide()
		$('#fb-logout-item').show()
		$('#logged-out-div')
			.hide()
		$('#logged-in-div')
			.show()
		var flamePressed = 0;
		$('.fire-button-general')
			.click(function(){
				flamePressed += 1;
				let flamePower = "brightness("+((flamePressed * 5) + 30)+"%)";
				console.log(flamePower) 
				console.log(flamePressed) 
				$('#fire-button')
					.hide("slow")
				$('#fire-button-clicked')
					.show()
				$('#fire-button-clicked')
					.css("filter", flamePower);
			})

	} else if (response.status === 'not_authorized') {
	    // the user is logged in to Facebook, 
	    // but has not authenticated your app
	} else {
	    // the user isn't logged in to Facebook.
	  }
	});
	$('#fb-button')
		.click(function(){
			alert('Login a Facebook')
			FB.login(function(response){
  			// Handle the response object, like in statusChangeCallback() in our demo
  			// code.
	},{scope: 'public_profile,email'});
		})
	var c = document.getElementById("mainCanvas");
	var ctx = c.getContext("2d");
	background(ctx, "#FFEB3B","#8BC34A");
	setTimeout(function(){
		addTitle(ctx, 'Zac Efron', 'title');
		addTitle(ctx, 'Amante de animales', 'subtitle');
		addMainImage(ctx, "static/ex-img/rec-ex.png");
		var actualCanvas = convertCanvasToImage(c);
	}, 50)

	function background(ctx, color1, color2){
		// Create gradient
		// var grd=ctx.createLinearGradient(0,0,200,0); Creates a linear gradient.
		// var grd=ctx.createLinearGradient(0,0,0,200); Creates a up do down gradient.
		var grd=ctx.createLinearGradient(0,0,800,200);
		grd.addColorStop(0,color1);
		grd.addColorStop(1,color2);

		// Fill with gradient
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,800,420);	
	}
	function addTitle(ctx, text, type){
		// Add a function so that the center of the text goes to the center of the canvas.
		if (type == 'title'){	
			ctx.fillStyle='white';
			ctx.font='800 30pt Roboto'
			ctx.fillText(text,340,55)
		}
		if (type == 'subtitle') {
			ctx.fillStyle='#2196F3';
			ctx.font='500 25pt Roboto'
			ctx.fillText(text,300,100)
		}
	}
	function addMainImage(ctx, imgUrl){
		let img = new Image()
		img.src = imgUrl;
		img.addEventListener("load", function(){
			ctx.drawImage(img,500,120,250,250)
		}, false)

	}
	function convertCanvasToImage(canvas){
		let img = new Image()
		img.src=canvas.toDataURL("image/png")
		return img
	}
})