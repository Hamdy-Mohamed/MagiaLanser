let nav_btn = document.querySelector(".nav_btn");

nav_btn.onclick = () => {
  window.open("../pages/login.html", "_self");
};

// projects_ length
let projects_content = document.querySelectorAll(".projects_content");
let setNumber = document.querySelector(".number_of_projects");

window.addEventListener("load", () => {
  setNumber.innerHTML = projects_content.length;
});
