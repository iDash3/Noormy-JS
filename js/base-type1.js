var fbAppId = '522565318118931'
var fbinfo = new Array();
var profilePicUrl
function fbLoginStatus(){
	FB.getLoginStatus(function(response) {
	if (response.status === 'connected') {
		var uid = response.authResponse.userID;
		var accessToken = response.authResponse.accessToken;
		$('#fb-login-item').hide()
		$('#fb-logout-item').show()
		$('#logged-out-div').hide()
		$('#logged-in-div').show()
		var flamePressed = 0;
		$('.fire-button-general')
	  	.click(function(){
		    flamePressed += 1;
		    let flamePower = "brightness("+((flamePressed * 5) + 40)+"%)";
		    console.log(flamePower) 
		    console.log(flamePressed) 
		    $('#fire-button').hide("slow")
		    $('#fire-button-clicked').show()
		    $('#fire-button-clicked')
		      .css("filter", flamePower);
		  })
	  FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(300).height(300)'}, function(response) {
			fbinfo[0] = response.id;
			fbinfo[1] = response.name;
			fbinfo[2] = response.first_name;
			fbinfo[3] = response.last_name;
			fbinfo[4] = response.email;
	 		profilePicUrl = response.picture.data.url;
	 		console.log(response)
		});
		loadTest()
	} else if (response.status === 'not_authorized') {
		sendAlertNotification('Oops! ', 'Authorize our app in order to use it. :)', 'logged-out-div','warning')
		profilePicUrl = '/static/ex-img/rec-ex.png'
		loadTest()
	} else {
		profilePicUrl = '/static/ex-img/rec-ex.png'
		loadTest()
	}
	});
}

function sendAlertNotification(strongText, normalText, targetId, type){
	if(type==null){type = 'info'}
	let newAlert = $('<div class="alert alert-'+ type +' alert-dismissable">\
	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
	<strong>'+ strongText +'</strong>'+ normalText +'</div>')
	$('#' + targetId).append(newAlert);
}         

window.fbAsyncInit = function() {
	FB.init({
	  appId            : fbAppId,
	  status           : true,
	  xfbml            : true,
	  cookie           : true,
	  version          : 'v2.11'
	});


	  if (typeof(FB) != 'undefined' && FB != null ) {
	      console.log('SDK LOADED')
	      console.log('FB loading...')
	      fbLoginStatus()
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

function loadTest(){
	addTitle(ctx, 'Zac Efron', 'title');
	addTitle(ctx, 'Amante de animales', 'subtitle');
	addMainImage(ctx, profilePicUrl);
	addResultImage(ctx, "static/imgs/zac-animal.jpg");
	var actualCanvas = convertCanvasToImage(c);
}

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
		ctx.drawImage(img,80,130,260,260)
	}, false)
}
function addResultImage(ctx, imgUrl){
	let img = new Image()
	img.src = imgUrl;
	img.addEventListener("load", function(){
		ctx.drawImage(img,500,110,250,300)
	}, false)
}
function convertCanvasToImage(canvas){
	let img = new Image()
	img.src=canvas.toDataURL("image/png")
	return img
}

$().ready(function(){
	$('#fb-logout-item').hide()	
	$('#fb-button, #fb-login-item')
		.click(function(){
			console.log('Facebook Login')
			FB.login(function(response){
				if (response.authResponse) {
					console.log('Welcome!  Fetching your information.... ');
          fbLoginStatus();
        } else {
        	console.log('User cancelled login or did not fully authorize.');
				}
			},{scope: 'public_profile,email'});
		})
	$('#fb-share')
		.click(function(){
			FB.ui({
				method: 'share',
				href: 'https://idash3.github.io/Noormy-JS/base-1.html',
			}, function(response){})
		})
	$('#fb-logout-item')
		.click(function(){
			FB.logout(function(response) {
				deleteCookie("fblo_" + fbAppId);
			});
			fbLoginStatus();
		})
	function deleteCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

	var c = document.getElementById("mainCanvas");
	var ctx = c.getContext("2d");
	background(ctx, "#FFEB3B","#8BC34A");
})