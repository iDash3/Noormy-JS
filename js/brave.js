function fbLoginStatus(){
    FB.getLoginStatus(function(response) {
    console.log(response.status)
    console.log(document.cookie)
        if (response.status === 'connected') {
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            FB.api('/me', function(response) {
              let username = '';
              if (response.name != 'undefined'){
                username = ' ' + response.name + ' ';
              }
            });
            $('#fb-login-item').hide()
            $('#fb-logout-item').show()
        } else if (response.status === 'not_authorized') {
        } else {
        }
    });
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

$().ready(function(){
  $('#fb-logout-item').hide()
   $('#fb-logout-item')
    .click(function(){
      console.log('Facebook Logout')
      FB.logout(function(response) {
        deleteCookie("fblo_" + fbAppId); // fblo_yourFBAppId. example: fblo_444499089231295
        fbLoginStatus();
      });
  })
  $('#fb-login-item')
    .click(function(){
      console.log('Facebook Login')
      FB.login(function(response){
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          fbLoginStatus()
          FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },{scope: 'public_profile,email'});
  })
 
    $('#midly').click(function(){
		FB.api('/me/feed', 'post', {
			source: 'https://i.imgur.com/0o1sDst.jpg',
		})
	})
	$('#hot').click(function(){
		FB.api('/me/feed', 'post', {
			source: 'https://i.imgur.com/0o1sDst.jpg',
		})
	})
	$('#super').click(function(){
		FB.api('/me/feed', 'post', {
			source: 'https://i.imgur.com/0o1sDst.jpg',
		})
	})

})