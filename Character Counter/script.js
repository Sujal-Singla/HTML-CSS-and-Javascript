const input = document.querySelector("textarea");
const para = document.querySelector("p");
input.addEventListener("input", () => {
  para.innerHTML = `Characters : ${input.value.length}`;
});
