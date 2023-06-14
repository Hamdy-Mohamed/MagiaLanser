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
