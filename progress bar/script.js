let start = document.querySelector(".start");
let reset = document.querySelector(".Reset");
let progress = document.querySelector(".progress");

let interval;
let width = 0;
start.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    progress.style.width = width + "%";
  }
  interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += 1;
      progress.style.width = width + "%";
    }
  }, 100);
});
reset.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
  width = 0;
  progress.style.width = width + "%";
});
