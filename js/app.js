const main = document.querySelector(".main");
const field = document.querySelector(".colorfield");
const btn = document.querySelector("button");

function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

const ran = function () {
  const ran = getRandomArbitrary(1000000, 10000000);
  const hex = ran.toString(16);
  field.textContent = hex;
  main.style.backgroundColor = `#${hex}`;
};

btn.addEventListener("click", ran);
