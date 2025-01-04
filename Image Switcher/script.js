const images = [
  "./assets/dice-1502706_640.jpg",
  "./assets/images.jpeg",
  "./assets/Virrappan2-58f79980ae6fb__880.jpg",
];

const main = document.querySelector(".main");
const selected = document.querySelector(".select");

images.forEach((imgsrc, index) => {
  const img = document.createElement("img");
  img.src = imgsrc;
  img.addEventListener("click", () => {
    main.src = imgsrc;
  });
  selected.appendChild(img);
});
