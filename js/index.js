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
		$('#sht-div').html('Ooh, baby. You are ready to go')
		$('#fb-login-item').hide()
		$('#fb-logout-item').show()
	} else if (response.status === 'not_authorized') {
	    // the user is logged in to Facebook, 
	    // but has not authenticated your app
		$('#sht-div').html('Not Authorized')
	} else {
	    // the user isn't logged in to Facebook.
		$('#sht-div').html('<span>Not connected to Facebook. <a id="fb-blue">Click here</a> to connect.</span>');
	  }
	});

	$('#fb-login-item, #fb-blue')
		.click(function(){
			alert('Login to Facebook')
			FB.login(function(response){
  			// Handle the response object, like in statusChangeCallback() in our demo
  			// code.
	},{scope: 'public_profile,email'});
	})
	$('.flame-b')
		.click(function(){
			alert('Random test')
	})
})