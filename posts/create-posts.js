"use strict";

// Logged In Check
// if (isLoggedIn() === false) {
//   window.location.replace("../account/register.html");
// }

const postButton = document.querySelector("#postButton");
const postContent = document.querySelector("#postContent");

function formToPost() {
  let post = {
    text: postContent.value,
  };
  return post;
}

function addPost() {
  const logInData = getLoginData();
  const post = formToPost();
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${logInData.token}`,
    },
    body: JSON.stringify(post),
  }).then;
}

// Create post modal scripts

let createPostButton = document.querySelector(".create-post-button");
let createPostModal = document.getElementById("createPostModal");
let closeModal = document.querySelector(".close");
createPostButton.onclick = function () {
  createPostModal.style.display = "block";
};
closeModal.onclick = function () {
  createPostModal.style.display = "none";
};
function inputRandomPlaceholder() {
  let random = Math.floor(Math.random() * 10);
  let randomPosts = [
    "Type your post message here...",
    "Type something funny here...",
    "Type something creative here...",
    "Add to the conversation here...",
  ];
  switch (random) {
    case 0:
    case 1:
      postContent.setAttribute("placeholder", randomPosts[0]);
      break;
    case 2:
    case 3:
      postContent.setAttribute("placeholder", randomPosts[1]);
      break;
    case 4:
    case 5:
      postContent.setAttribute("placeholder", randomPosts[2]);
      break;
    case 6:
    case 7:
      postContent.setAttribute("placeholder", randomPosts[3]);
      break;
    default:
      postContent.setAttribute("placeholder", "Type your post message here...");
      break;
  }
}

postButton.onclick = function () {
  addPost();
  createPostModal.style.display = "none";
  loadAllPosts();
};
window.onload = inputRandomPlaceholder;
