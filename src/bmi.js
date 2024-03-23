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
      if (inputGender.value === "male") {
        bmr =
          10 * inputWeight.value +
          6.25 * inputHeight.value -
          5 * inputAge.value +
          5;

        maintenanceCalories = Math.floor(bmr * inputActivity.value);
      }

      if (inputGender.value === "female") {
        bmr =
          10 * inputWeight.value +
          6.25 * inputHeight.value -
          5 * inputAge.value -
          161;

        maintenanceCalories = Math.floor(bmr * inputActivity.value);
      }
    }

    // Check if Imperial unit
    if (inputWeight.placeholder === "lb" && inputHeight.placeholder === "in") {
      if (inputGender.value === "male") {
        bmr =
          4.536 * inputWeight.value +
          15.88 * inputHeight.value -
          5 * inputAge.value +
          5;

        maintenanceCalories = Math.floor(bmr * inputActivity.value);
      }

      if (inputGender.value === "female") {
        bmr =
          4.536 * inputWeight.value +
          15.88 * inputHeight.value -
          5 * inputAge.value -
          161;

        maintenanceCalories = Math.floor(bmr * inputActivity.value);
      }
    }
  }

  console.log(`${maintenanceCalories} Kcal/day`);
});
