const button = document
  .querySelector("button")
  .addEventListener("click", () => {
    const input = parseFloat(document.querySelector("input").value);
    const from = document.querySelector("#from").value;
    const to = document.querySelector("#to").value;
    const para = document.querySelector("p");
    let converted;
    if (isNaN(input)) {
      alert("Please enter some valid value");
    }
    if (from === to) {
      input = converted;
    }
    if (from === "celsius" || to === "Fahrenheit") {
      converted = (input * 9) / 5 + 32;
    }
    if (from === "Fahrenheit" || to === "celsius") {
      converted = ((input - 32) * 5) / 9;
    }
    para.innerHTML = `${converted.toFixed(3)} ${to}`;
  });
