// ! Unfinished
"use strict";

// Logged In Check
if (isLoggedIn() === false) {
  window.location.replace("../account/register.html");
}

const postsBody = document.querySelector("#postsBody");

window.onload = function displayPosts() {
  const logInData = getLoginData();
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${logInData.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      generatePostCard(data);
    });
};

function getLoginData() {
  const loginJSON = window.localStorage.getItem("login-data");
  return JSON.parse(loginJSON) || {};
}

function generatePostCard(data) {
  // Create card container
  let card = document.createElement("div");
  card.className = "post-card";

  // Create card body
  let postsBody = document.createElement("div");
  postsBody.className = "card-body";
  postsBody.textContent = "";

  // Create card profile stuff
  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  // Create card message body
  let cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-muted";
  cardSubtitle.textContent = subtitle;

  // Create card content
  let cardContent = document.createElement("p");
  cardContent.className = "card-text";
  cardContent.textContent = content;

  // Append title, subtitle, and content to the card body
  postsBody.appendChild(cardTitle);
  postsBody.appendChild(cardSubtitle);
  postsBody.appendChild(cardContent);

  // Append card body to the card
  card.appendChild(postsBody);

  return card;
}
