function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  console.log(response);
  console.log('Change user added');
  $("p.facebookLogin").hide();
  $("h1#name").text(response.name);
  $("#facebookPhoto img").attr('src', "https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10988504_10206516644063027_4886991317593425138_n.jpg?oh=e52c57bc6d6e39b96c4fe497f3fc9d78&oe=5771316E");
}