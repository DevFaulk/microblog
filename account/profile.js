// Modal Functionality

let editProfile = document.getElementById("editProfile");
const cancelButton = document.getElementById("cancel");

let createPostModal = document.getElementById("createPostModal");
let closeModal = document.querySelector(".close");

editProfile.onclick = function () {
  createPostModal.style.display = "block";
};
closeModal.onclick = function () {
  createPostModal.style.display = "none";
};
cancelButton.onclick = function () {
  createPostModal.style.display = "none";
};
