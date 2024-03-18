"use strict";

// Variables
const radioImperial = document.getElementById("imperial");
const radioMetric = document.getElementById("metric");

const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");

const labelWelcome = document.getElementById("display-welcome");
const labelBMI = document.getElementById("display-bmi");
const labelBMIValue = document.getElementById("bmi-value");
const labelBMIText = document.getElementById("bmi-text");

const btnSubmit = document.getElementById("submit");

let bmiValue;

const calcDisplayBMI = function () {
  if (radioMetric.checked) {
    inputHeightValue = Number(inputHeight.value) / 100;
    bmiValue = (
      Number(inputWeight.value) /
      (inputHeightValue * inputHeightValue)
    ).toFixed(1);
  }

  if (radioImperial.checked) {
    inputHeightValue = Number(inputHeight.value);
    bmiValue = (
      (Number(inputWeight.value) / (inputHeightValue * inputHeightValue)) *
      703
    ).toFixed(1);
  }

  labelBMIValue.textContent = bmiValue;

  if (bmiValue < 18.5) {
    labelBMIText.textContent = `Your BMI suggests you you are Underweight. See below for
    more information.`;
  } else if (bmiValue > 18.5 && bmiValue < 24.9) {
    labelBMIText.textContent = `Your BMI suggests you weight is in healthy range. See below for
    more information.`;
  } else if (bmiValue > 25 && bmiValue < 29.9) {
    labelBMIText.textContent = `Your BMI suggests you are in overweight category. See below for
    more information.`;
  } else {
    labelBMIText.textContent = `Your BMI suggests you are obese. See below for
    more information.`;
  }
  labelWelcome.classList.add("hidden");

  labelBMI.classList.remove("hidden");

  labelBMI.classList.add("flex");
};

let inputHeightValue;
// Unit Conversion

radioMetric.addEventListener("click", function () {
  inputWeight.placeholder = "Kg";
  inputHeight.placeholder = "cm";
});

radioImperial.addEventListener("click", function () {
  inputWeight.placeholder = "Pound";
  inputHeight.placeholder = "inch";
});

// BMI Calculation and Display
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  calcDisplayBMI();
});
