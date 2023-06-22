let nav_btn = document.querySelector(".nav_btn");

nav_btn.onclick = () => {
  window.open("../pages/login.html", "_self");
};

// let mobile_nav = document.querySelector(".mobile_nav");
let logo = document.querySelector(".logo")
logo.onclick = ()=>{window.location.reload()}