"use strict";

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
      "Authorization": `Bearer ${logInData.token}`
    },
    body: JSON.stringify(post),
  }).then;
}

postButton.onclick = addPost;
