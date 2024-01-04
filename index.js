"use strict";

// Logged In Check
// if (isLoggedIn() === false) {
//   // window.location.replace("../account/login.html");
// }

// Change Login to Logout if logged in
let loginLink = document.getElementById("loginLink");
if (isLoggedIn() === true) {
  loginLink.innerText = "Logout";
  loginLink.setAttribute("onclick", "logout()");
}

// Navbar Styling
const profileLogo = document.getElementById("profileLogo");
const appLogo = document.getElementById("appLogo");
const profileOverText = document.getElementById("profileOverText");
const homeHoverText = document.getElementById("homeHoverText");

profileLogo.onmouseover = profileOverText.style.display = "inline";
appLogo.onmouseover = homeHoverText.style.display = "inline";
