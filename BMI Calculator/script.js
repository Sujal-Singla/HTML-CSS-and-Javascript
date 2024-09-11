document.querySelector("button").addEventListener("click", () => {
  console.log("clicked");
  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);
  const para = document.querySelector("#p");
  const show = document.querySelector("#show");
  let bmi = weight / ((height / 100) * (height / 100));
  let bmiValue = bmi.toFixed(2);
  para.innerHTML = `Your BMI :- ${bmiValue}`;
  if (bmi <= 18.5) {
    cateogary = "UnderWeight";
    show.style.color = "Yellow";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    cateogary = "Normal";
    show.style.color = "Green";
  } else if (bmi >= 25 && bmi < 29.9) {
    cateogary = "Overweight";
    show.style.color = "orange";
  } else {
    cateogary = "Obesity";
    show.style.color = "red";
  }
  show.innerHTML = cateogary;
});
