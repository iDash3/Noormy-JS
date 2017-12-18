window.fbAsyncInit = function() {
      FB.init({
        appId            : '522565318118931',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.11'
      });

     if (typeof(FB) != 'undefined' && FB != null ) {
        console.log('SDK LOADED')
        console.log('FB loading...')
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
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

          } else {
            
          }
        });
        } else {
          alert('Facebook was unable to load, please check your device and reload.')
          console.log('SDK NOT LOADED')
        }
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));


$().ready(function(){
	$('#fb-logout-item').hide('')	
	$('#fb-button, #fb-login-item')
		.click(function(){
			console.log('Facebook Login')
			FB.login(function(response){

	},{scope: 'public_profile,email'});
		})
	$('#fb-logout-item')
		.click(function(){
			FB.logout(function(response) {
				
			});
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