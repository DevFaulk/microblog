// ! Unfinished
"use strict";

// Logged In Check
if (isLoggedIn() === false) {
  window.location.replace("../account/register.html");
}

const postCard = document.querySelector(".post-card");
// const likeButton = document.querySelector("#like-button");
const heartButton = document.querySelector("#heart-button")

function loadAllPosts() {
  const loginData = getLoginData();
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  })
    .then((response) => response.json())
    .then((posts) => {
      for (let post of posts) {
        let card = document.createElement("div");
        card.className = "user-post";

        let username = document.createElement("h3");
        username.innerText = post.username;
        

        let postCardContent = document.createElement("p");
        postCardContent.innerText = post.text;
        postCardContent.className = "post-content"

        let heartButton = document.createElement("button");
        heartButton.className= "like-button";
        heartButton.innerText= "Like";

        card.appendChild(username);
        card.appendChild(postCardContent);
        card.appendChild(heartButton);
        postCard.appendChild(card);
      }
    });
}

loadAllPosts();