"use strict";

const postCard = document.querySelector(".post-card");
const likeButton = document.querySelector("#like-button");

function loadPosts() {
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

        let likeButton = document.createElement("button");
        likeButton.className= "like-button";
        likeButton.innerText= "Like";

        card.appendChild(username);
        card.appendChild(postCardContent);
        card.appendChild(likeButton);
        postCard.appendChild(card);
      }
    });
}

loadPosts();