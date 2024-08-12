let btn = document.querySelector("#toggle");
let text = document.querySelector("#text");

btn.addEventListener("click", () => {
  //   console.log("clicked");
  if (text.style.display === "none") {
    text.style.display = "block";
    btn.innerHTML = "Hide Text";
  } else {
    text.style.display = "none";
    btn.innerHTML = "Show text";
  }
});
