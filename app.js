const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

///Remove the active image/card class
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
