var custom_msg = [
  'perfect afternoon for your brain to relax, huh?',
  'a certain prince sends his regards...',
  'you are part of us now!',
  'hope you enjoy the content!',
]
var tm = 
  '<div class="col-12 col-md-4 text-center">' +
    '<a href=":test url:" title=":id:">' +
      '<div class="container-h">' +
        '<div class="test-img" alt="Test">' +
          '<img src=":img url:" alt=":img alt:" class="img-fluid">' +
        '</div>' +
        '<div class="overlay">' +
            '<img class="icon-t" src="static/icons/fire_centi_moreorange-3.png" alt="flame-icon">' +
          '<div class="text-t">:likes:</div>' +
        '</div>' +
      '</div>' +
    '</a>' +
    '<div class="post-title text-center">' +
      '<h5>' +
        ':title:' +
      '</h5>' +
    '</div>' +
  '</div>'

function renderTest(tests){
  tests.forEach(function(test){
    let final_test = tm
      .replace(':title:', test.title)
      .replace(':id:', test.id)
      .replace(':img url:', test.img_url)
      .replace(':img alt:', test.title + 'Image')
      .replace(':test url:', test.url)
      .replace(':likes:', test.likes)
    let $test = $(final_test)
    $test.hide()
  })
}

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
            let random_msg = custom_msg[Math.floor(Math.random() * custom_msg.length)];
            $('#sht-div').html('Hey ' + '<b class="amber">' + username + '</b>' + ', ' + random_msg);
          });
          $('.fb-login').hide()
          $('.fb-logout').show()
        } else if (response.status === 'not_authorized') {
            $('#sht-div').html('Authorize our app in order to use it. :)')
        } else {
          $('.fb-login').show()
          $('.fb-logout').hide()
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
  $('.fb-logout').hide()

  $('#sht-div').html($('<span>Not connected to Facebook.\
  <span id="fb-blue">Click here to connect.</span></span>'))
  
  $('.fb-login, #fb-blue')
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
  $('.fb-logout')
    .click(function(){
      console.log('Facebook Logout')
      FB.logout(function(response) {
        deleteCookie("fblo_" + fbAppId);
        fbLoginStatus();
      });
  })

  // Make header sticky
  window.onscroll = function() {
    var header = document.getElementById("header-container");
    var sticky = 80
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else{
      header.classList.remove("sticky");
    } 
  };
})