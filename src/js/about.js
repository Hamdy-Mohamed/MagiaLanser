let nav_btn = document.querySelector(".nav_btn");

nav_btn.onclick = () => {
  window.open("../pages/login.html", "_self");
};

let mobile_nav = document.querySelector(".mobile_nav");
let logo = document.querySelector(".logo")
logo.onclick = ()=>{window.location.reload()}
let mobile_nav_btn = document.querySelector(".mobile_nav_btn")
console.log(mobile_nav_btn)
mobile_nav_btn.addEventListener("click",()=>{
  const currentDisplay = getComputedStyle(mobile_nav).display;

  if (currentDisplay === "flex") {
    mobile_nav.style.display = "none";
  } else {
    mobile_nav.style.display = "flex";
  }
})
