const buttons = document.querySelectorAll(".btn");
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const btnSubmit = document.querySelector("#submit");
const rating = document.getElementById("rating");

btnSubmit.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

buttons.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    const btn = e.target.innerHTML;
    rating.innerHTML = btn;
  });
});
