"use strict";

let loginLink = document.getElementById("loginLink");

// Logged In Check
if (isLoggedIn() === false) {
  window.location.replace("../account/register.html");
}
if (isLoggedIn() === true) {
  loginLink.innerText = "Logout";
  loginLink.setAttribute("onclick", "logout()");
}
