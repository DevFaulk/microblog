"use strict";

// Logged In Check
if (isLoggedIn() === false) {
  window.location.replace("../account/register.html");
}

// Change Login to Logout if logged in
let loginLink = document.getElementById("loginLink");
if (isLoggedIn() === true) {
  loginLink.innerText = "Logout";
  loginLink.setAttribute("onclick", "logout()");
}
