var menuBtn = document.getElementById("menu-btn");
var navContain = document.getElementById("nav-contain");
var closeBtn = document.getElementById("close-btn");

let = isNav = false;
menuBtn.addEventListener("click", function () {
  navContain.classList.add("show");
  console.log("click menu");
});

closeBtn.addEventListener("click", function () {
  navContain.classList.remove("show");
});
