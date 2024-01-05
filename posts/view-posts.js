"use strict";

// Post card scripts

let userPosts = document.querySelector(".user-posts");

function timeAgo(timestamp) {
  const currentDate = new Date();
  const postDate = new Date(timestamp);
  const seconds = Math.floor((currentDate - postDate) / 1000);
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(seconds / 31536000);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}

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
        card.className = "card user-post my-5 shadow";

        let usersName = document.createElement("em");
        usersName.innerText = `@${post.username}`;
        usersName.className = "card-title p-3 text-light-emphasis";

        let usersContent = document.createElement("div");
        usersContent.className =
          "card-body post-content d-flex justify-content-between p-3";
        let usersMessage = document.createElement("p");
        usersMessage.innerText = post.text;
        usersMessage.className = "card-text post-content p-3";
        let usersPhoto = document.createElement("div");
        usersPhoto.className = "photo";

        const imageUrlRegex = /:\s*(.+)/;
        const match = post.text.match(imageUrlRegex);

        if (match) {
          // If an image URL is found, create an image element
          const imageUrl = match[1];
          const imageElement = document.createElement("img");
          imageElement.className = "post-img card-img p-1 m-3 shadow";
          imageElement.src = `https:${imageUrl}`;
          usersPhoto.appendChild(imageElement);

          // Display the text without the image URL
          usersMessage.innerText = post.text.replace(imageUrlRegex, "");
        } else {
          // If no image URL is found, use the original post text
          usersMessage.innerText = post.text;
        }
        let likeContent = document.createElement("div");
        likeContent.className =
          "content d-flex p-1 ps-0 pe-2 m-3 justify-content-evenly align-items-center align-self-end shadow-sm";
        let heartButton = document.createElement("span");
        heartButton.className = "heart d-flex align-self-stretch";
        let likeAndNumb = document.createElement("span");
        likeAndNumb.className = "like-and-numb";
        let likeText = document.createElement("span");
        likeText.className = "text p-1 fw-bold";
        likeText.innerText = "Like";
        let likeNumb = document.createElement("span");
        likeNumb.className = "numb p-1";

        let timeAndLike = document.createElement("div");
        timeAndLike.className = "d-flex justify-content-between p-3 pb-0";

        let postTime = document.createElement("h5");
        postTime.className =
          "d-flex post-time border-black border rounded shadow-sm p-3 m-3 align-items-center px-4";
        postTime.innerText = timeAgo(post.createdAt);

        card.appendChild(usersName);
        card.appendChild(usersContent);
        usersContent.appendChild(usersMessage);
        usersContent.appendChild(usersPhoto);
        timeAndLike.appendChild(likeContent);
        timeAndLike.appendChild(postTime);
        card.appendChild(timeAndLike);
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

// ! uncomment in future
// setTimeout (LoadAllPost(), 3000)
