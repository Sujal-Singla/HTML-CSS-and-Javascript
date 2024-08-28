const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const para = document.querySelector("p");

let countdown;
let timeRemaining;
let ispaused = false;
start.addEventListener("click", () => {
  const input = parseInt(document.querySelector("input").value);
  if (isNaN(input) || input <= 0) {
    alert("Please Enter some value to start countdown");
    return;
  }
  timeRemaining = input;
  startCountDown();
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

reset.addEventListener("click", () => {
  clearInterval(countdown);
  para.innerHTML = "00:00";
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  stop.innerHTML = "Stop";

  // to make the input value empty after reset!
  document.querySelector("input").value = "";
  ispaused = false;
});

stop.addEventListener("click", () => {
  if (ispaused) {
    startCountDown();
    stop.innerHTML = "Stop";
  } else {
    clearInterval(countdown);
    stop.innerHTML = "Start";
  }
  ispaused = !ispaused;
});

function startCountDown() {
  para.innerHTML = formatTime(timeRemaining);
  countdown = setInterval(() => {
    timeRemaining--;
    para.innerHTML = formatTime(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(countdown);
      start.disabled = false;
      stop.disabled = true;
      reset.disabled = true;
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingTime = seconds % 60;
  return `${minutes}${remainingTime < 10 ? 0 : ""} : ${remainingTime}`;
}
