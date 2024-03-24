"use strict";

const radioMetric = document.getElementById("metric");
const radioImperial = document.getElementById("imperial");

const labelWeightGainCalories = document.getElementById("gain");
const labelWeightMaintainCalories = document.getElementById("maintain");
const labelWeightLossCalories = document.getElementById("loss");
const labelCorrectForm = document.getElementById("correct");
const labelErrorForm = document.getElementById("failed");

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
let weightGainCalories;
let wightLossCalories;

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    !inputAge.value ||
    !inputGender.value ||
    !inputWeight.value ||
    !inputHeight.value ||
    !inputActivity.value ||
    inputAge.value === "" ||
    inputGender.value === "" ||
    inputWeight.value === "" ||
    inputHeight.value === "" ||
    inputActivity.value === ""
  ) {
    console.log("Please fill all the details");

    labelWeightGainCalories.textContent = "Calories";
    labelWeightMaintainCalories.textContent = "Calories";
    labelWeightLossCalories.textContent = "Calories";

    labelErrorForm.classList.remove("hidden");
    labelCorrectForm.classList.add("hidden");
  } else {
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
    weightGainCalories = maintenanceCalories + 250;
    wightLossCalories = maintenanceCalories - 250;
    labelWeightGainCalories.textContent = weightGainCalories;
    labelWeightMaintainCalories.textContent = maintenanceCalories;
    labelWeightLossCalories.textContent = wightLossCalories;

    labelCorrectForm.classList.remove("hidden");
    labelErrorForm.classList.add("hidden");
  }

  inputAge.value =
    inputGender.value =
    inputWeight.value =
    inputHeight.value =
    inputActivity.value =
      "";
});
