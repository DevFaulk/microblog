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
function toggleProfileHoverText(toggle) {
  if (toggle) {
    profileOverText.style.display = "inline-block";
  } else {
    profileOverText.style.display = "none";
  }
}

function toggleHomeHoverText(toggle) {
  if (toggle) {
    homeHoverText.style.display = "inline-block";
  } else {
    homeHoverText.style.display = "none";
  }
}

profileLogo.onmouseover = function () {
  toggleProfileHoverText(true);
};
profileLogo.onmouseout = function () {
  toggleProfileHoverText();
};
appLogo.onmouseover = function () {
  toggleHomeHoverText(true);
};
appLogo.onmouseout = function () {
  toggleHomeHoverText();
};
