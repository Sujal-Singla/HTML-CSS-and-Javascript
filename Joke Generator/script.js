document.querySelector("button").addEventListener("click", () => {
  const joke = document.querySelector("p");
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = `${data.setup} ${data.punchline}`;
    })
    .catch((err) => {
      joke.innerHTML = `OOPS! there is an internal server Error`;
    });
});
