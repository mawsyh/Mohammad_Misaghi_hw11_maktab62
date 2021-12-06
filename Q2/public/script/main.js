const imageEl = document.querySelector(".image-container");
const buttonEl = document.querySelector("#button");

buttonEl.addEventListener("click", () => {
  imageEl.classList.toggle("hide");
});
