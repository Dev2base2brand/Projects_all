let mybtn = document.querySelector(".mobile-btn");

let menu = document.querySelector(".mobile-menu");

mybtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
