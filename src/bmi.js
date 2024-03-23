"use strict";

const radioMetric = document.getElementById("metric");
const radioImperial = document.getElementById("imperial");

const inputAge = document.getElementById("age");
const inputGender = document.getElementById("gender");
const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const inputActivity = document.getElementById("activity");

const btnSubmit = document.getElementById("submit");

radioImperial.addEventListener("click", function () {
  inputWeight.placeholder = "lb";
  inputHeight.placeholder = "in";
});

radioMetric.addEventListener("click", function () {
  inputWeight.placeholder = "kg";
  inputHeight.placeholder = "cm";
});

let bmr;
let maintenanceCalories;

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputAge && inputGender && inputWeight && inputHeight && inputActivity) {
    // Check if Metric unit
    if (inputWeight.placeholder === "kg" && inputHeight.placeholder === "cm") {
      bmr =
        10 * inputWeight.value +
        6.25 * inputHeight.value -
        5 * inputAge.value +
        5;

      maintenanceCalories = Math.floor(bmr * inputActivity.value);
    }
  }

  console.log(`${maintenanceCalories} Kcal/day`);
});
