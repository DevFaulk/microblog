// ! Unfinished
"use strict";

// Logged In Check
if (isLoggedIn() === false) {
  window.location.replace("../account/register.html");
}

const postCard = document.querySelector(".post-card");



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
        postCardContent.className = "post-content";

        let heartDiv = document.createElement("div");
        heartDiv.className = "heart-button";
        let likeContent = document.createElement("div");
        likeContent.className = "content";
        let heartButton = document.createElement("span");
        heartButton.className = "heart";
        let likeText = document.createElement("span");
        likeText.className = "text";
        likeText.innerText = "Like";
        let likeNumb = document.createElement("span");
        likeNumb.className = "numb";

        card.appendChild(username);
        card.appendChild(postCardContent);
        card.appendChild(heartDiv);
        heartDiv.appendChild(likeContent);
        likeContent.appendChild(heartButton);
        likeContent.appendChild(likeText);
        likeContent.appendChild(likeNumb);
        postCard.appendChild(card);
      }
      console.log(posts);
    });
}

loadAllPosts();
