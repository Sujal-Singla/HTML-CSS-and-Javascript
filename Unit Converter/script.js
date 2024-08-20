const converter = {
  meters: {
    feet: 3.2808,
    meters: 1,
    liters: 1,
    gallons: 1,
  },
  feet: {
    meters: 0.3048,
    feet: 1,
    liters: 1,
    gallons: 1,
  },
  liters: {
    gallons: 0.2641,
    liters: 1,
    meters: 1,
    feet: 1,
  },
  gallons: {
    liters: 3.7854,
    gallons: 1,
    meters: 1,
    feet: 1,
  },
};

document.querySelector("button").addEventListener("click", () => {
  const value = parseFloat(document.querySelector(".value2").value);
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;

  if (isNaN(value)) {
    document.querySelector("p").textContent = "Please Enter some value";
    return;
  }
  const result = value * converter[from][to];

  document.querySelector("p").innerHTML = `Result : ${result.toFixed(2)}`;
});
