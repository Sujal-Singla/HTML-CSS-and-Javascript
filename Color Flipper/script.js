let btn = document.querySelector("#click").addEventListener("click", () => {
  let colorCode = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = colorCode;
  let code = (document.querySelector("#code").innerHTML = colorCode);
});
