const nav = document.getElementById("nav");

window.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("menu-toggle")) {
    nav.classList.toggle("hidden");
  }
});
