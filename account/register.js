"use strict"

const registerButton = document.querySelector("#registerButton")
const username = document.querySelector("#username")
const fullName = document.querySelector("#fullName")
const password = document.querySelector("#password")

function formToUser() {
    let user = {
        username: username.value,
        fullName: fullName.value,
        password: password.value,
    };
    return user;
}

function addUser() {
    const user = formToUser();
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(function () {
      window.location.href = "register.html"; 
    });
  }


registerButton.onclick = addUser;