// var target = window.self === window.top ? window.opener : window.parent;
var hash = window.location.hash;
var token = "";

if (hash) {
  token = window.location.hash.split('&')[0].split('=')[1];
  // target.postMessage(token, OAuthConfig.host);
}

