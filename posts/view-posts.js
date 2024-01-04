"use strict";

// Post card scripts

let userPosts = document.querySelector(".user-posts");

function loadAllPosts() {
  const loginData = getLoginData();
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  })
    .then((response) => response.json())
    .then((posts) => {
      userPosts.innerHTML = "";
      for (let post of posts) {
        let card = document.createElement("div");
        card.className = "user-post card";

        let usersName = document.createElement("h3");
        usersName.innerText = post.username;
        usersName.className = "card-title"

        let usersMessage = document.createElement("p");
        usersMessage.innerText = post.text;
        usersMessage.className = "post-content card-text";

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

        card.appendChild(usersName);
        card.appendChild(usersMessage);
        card.appendChild(heartDiv);
        heartDiv.appendChild(likeContent);
        likeContent.appendChild(heartButton);
        likeContent.appendChild(likeText);
        likeContent.appendChild(likeNumb);
        userPosts.appendChild(card);

        likeContent.addEventListener("click", () => {
          likeContent.classList.toggle("heart-active");
          likeText.classList.toggle("heart-active");
          likeNumb.classList.toggle("heart-active");
          heartButton.classList.toggle("heart-active");
        });
      }
    });
}

// Function Calls

loadAllPosts();
