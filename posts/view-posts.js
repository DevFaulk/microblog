// ! Unfinished

"use strict";

const postsBody = document.querySelector("#postsBody");

window.onload = function displayPosts() {
  const logInData = getLoginData();
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${logInData.token}`,
    },
    body: JSON.stringify(posts),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      generateBootstrapCard(data);
    });
};

function getLoginData() {
  const loginJSON = window.localStorage.getItem("login-data");
  return JSON.parse(loginJSON) || {};
}

function generateBootstrapCard(data) {
  // Create card container
  var card = document.createElement("div");
  card.className = "card";

  //Set card width
  card.style.width = width + "rem";

  // Create card body
  var postsBody = document.createElement("div");
  postsBody.className = "card-body";

  // Create card profile stuff
  var cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  // Create card message body
  var cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-muted";
  cardSubtitle.textContent = subtitle;

  // Create card content
  var cardContent = document.createElement("p");
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
