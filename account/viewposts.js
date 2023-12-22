"use strict"

const postCard = document.querySelector("#post-card")
const postCardContent = document.querySelector("#post-card-content")
const messageParagraph = document.querySelector("#messageParagraph")

function displayPosts() {
    const logInData = getLoginData();
    const posts = postCardContent.value
  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${logInData.token}`
    },
    body: JSON.stringify(posts),
  }).then;
}
