let img = document.querySelectorAll(".img");
let closebtn = document.querySelector(".closebtn");
let display = document.querySelector("#display");
let box = document.querySelector(".display");
img.forEach((item) => {
  item.addEventListener("click", () => {
    display.style.display = "block";
    display.src = item.src;
  });
});

closebtn.addEventListener("click", () => {
  display.style.display = "none";
});

box.addEventListener("click", (e) => {
  if (e.target !== display) {
    display.style.display = "none";
  }
});
