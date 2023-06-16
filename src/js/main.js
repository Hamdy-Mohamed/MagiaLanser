// events

let contactUs_btn = document.querySelector(".secondPic_btn");

contactUs_btn.onclick = () => {
  window.open("https://www.facebook.com/profile.php?id=100090867099566");
};

let logo = document.querySelector(".logo");

logo.onclick = () => {
  window.location.reload();
};

let login_btn = document.querySelector(".nav_btn");

login_btn.addEventListener("click", () => {
  window.open("src/pages/login.html", "_self");
});


// navbar mobile
let mobile_nav = document.querySelector(".mobile_nav");
let nav_btn = document.querySelector(".mobile_nav_btn")
nav_btn.addEventListener("click", function() {
  const currentDisplay = getComputedStyle(mobile_nav).display;

  if (currentDisplay === "flex") {
    mobile_nav.style.display = "none";
  } else {
    mobile_nav.style.display = "flex";
  }
});