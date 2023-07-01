document.addEventListener("DOMContentLoaded", function () {
  fetch("https://picsum.photos/1920/1080")
    .then(function (response) {
      document.body.style.backgroundImage = `url(${response.url})`;
    })
    .catch(function (error) {
      console.log("Error fetching image:", error);
    });
});
const nasehat = document.getElementById("advice");

function fetchRandomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      nasehat.textContent = advice;
      nasehat.classList.add("fade-in");
      setTimeout(() => {
        nasehat.classList.remove("fade-in");
      }, 7000);
    })
    .catch((error) => {
      console.log("Error fetching advice:", error);
    });
}
fetchRandomAdvice();
nasehat.addEventListener("click", fetchRandomAdvice);
