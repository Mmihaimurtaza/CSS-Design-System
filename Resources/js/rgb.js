"use strict";
//RGB generator

const path = window.location.pathname;
const page = path.split("/").pop();

//function used to generate rgb functionality
const generateRGB = () => {
  let r = document.getElementById("R").value;
  let g = document.getElementById("G").value;
  let b = document.getElementById("B").value;
  let o = document.getElementById("O").value;
  const rgbColor = document.getElementById("displayRgbaValue");
  const rgbaValue = document.getElementById("RGBAvalue");

  rgbaValue.innerHTML = `rgba(${r}, ${g}, ${b}, ${o})`;
  rgbColor.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${o})`;
};

let inputs = document.querySelectorAll('input[type="range"]');

//function used to generate hsla functionality
const generateHSL = () => {
  let h = document.getElementById("H").value;
  let s = document.getElementById("S").value;
  let l = document.getElementById("L").value;
  let o = document.getElementById("O").value;
  const hslaColor = document.getElementById("displayHslaValue");
  const hslaValue = document.getElementById("HSLAvalue");

  hslaValue.innerHTML = `hsla(${h}, ${s}%, ${l}%, ${o})`;
  console.log(`hsla(${h}, ${s}%, ${l}%, ${o})`);
  hslaColor.style.backgroundColor = `hsla(${h}, ${s}%, ${l}%, ${o})`;
};

//everytime when an input[range] is modified one of the functions is called in order to update the color content
inputs.forEach((element) => {
  page === "colors-rgb.html"
    ? element.addEventListener("input", generateRGB)
    : element.addEventListener("input", generateHSL);
});
