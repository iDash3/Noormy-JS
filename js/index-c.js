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
          $('#sht-div').html('Ooh, baby. You are ready to go')
          $('#fb-login-item').hide()
          $('#fb-logout-item').show()
          } else if (response.status === 'not_authorized') {
            $('#sht-div').html('Not Authorized')
          } else {
            $('#sht-div').html('<span>Not connected to Facebook. <a id="fb-blue">Click here</a> to connect.</span>');
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
  $('#fb-logout-item').hide()
  $('#fb-login-item, #fb-blue')
    .click(function(){
      alert('Login to Facebook')
     FB.login(function(response){
       // Handle the response object, like in statusChangeCallback() in our demo
       // code.
  },{scope: 'public_profile,email'});
  })
  $('#fb-logout-item')
    .click(function(){
      FB.logout(function(response) {
        
    });
  })
  $('.flame-b')
    .click(function(){
      alert('Random test')
  })
})