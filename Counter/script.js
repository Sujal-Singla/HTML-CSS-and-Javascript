let intervalId;

const increment = document
  .querySelector(".increment")
  .addEventListener("click", () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    intervalId = setInterval(() => {
      const counter = document.querySelector("p");
      counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }, 1000);
    const counter = document.querySelector("p");
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
  });

const decrement = document
  .querySelector(".decrement")
  .addEventListener("click", () => {
    const counter = document.querySelector("p");
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  });

const reset = document.querySelector(".reset").addEventListener("click", () => {
  const counter = document.querySelector("p");
  counter.innerHTML = 0;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
