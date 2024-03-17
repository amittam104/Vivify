"use strict";

// Variables
const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const btnSubmit = document.getElementById("submit");

let bmiValue;
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const heightInMeters = Number(inputHeight.value) / 100;

  bmiValue = (
    Number(inputWeight.value) /
    (heightInMeters * heightInMeters)
  ).toFixed(1);
});
