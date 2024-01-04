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
        console.log(post)
        let card = document.createElement("div");
        card.className = "card user-post m-3";

        let usersName = document.createElement("h3");
        usersName.innerText = post.username;
        usersName.className = "card-title p-3";

        let usersMessage = document.createElement("p");
        usersMessage.innerText = post.text;
        usersMessage.className = "card-text post-content p-3";

        let likeContent = document.createElement("div");
        likeContent.className =
          "content d-flex p-1 ps-0 pe-2 m-3 justify-content-evenly align-items-center";
        let heartButton = document.createElement("span");
        heartButton.className = "heart d-flex align-self-stretch";
        let likeAndNumb = document.createElement("span");
        likeAndNumb.className = "like-and-numb";
        let likeText = document.createElement("span");
        likeText.className = "text p-1 fw-bold";
        likeText.innerText = "Like";
        let likeNumb = document.createElement("span");
        likeNumb.className = "numb p-1";

        card.appendChild(usersName);
        card.appendChild(usersMessage);
        card.appendChild(likeContent);
        likeContent.appendChild(heartButton);
        likeContent.appendChild(likeAndNumb);
        likeAndNumb.appendChild(likeText);
        likeAndNumb.appendChild(likeNumb);
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
