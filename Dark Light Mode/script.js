const body = document.body;
document.querySelector("button").addEventListener("click", () => {
  console.log("clicked");
  body.classList.toggle("changeBg");
  if (body.classList.contains("changeBg")) {
    document.querySelector("button").innerHTML = "Switch to Light Mode";
  } else {
    document.querySelector("button").innerHTML = "Switch to Dark Mode";
  }
});
