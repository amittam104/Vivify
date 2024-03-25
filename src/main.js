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
const labelSubmitError = document.getElementById("error");

const containerMobileMenu = document.getElementById("mobile-menu");

const btnSubmit = document.getElementById("submit");
const btnMobileMenuOpen = document.getElementById("mobile-btn-open");
const btnMobileMenuClose = document.getElementById("mobile-btn-close");
const btnNavLinks = document.getElementById("nav-links");

let bmiValue;
let inputHeightValue;
// Unit Conversion

if (radioMetric) {
  radioMetric.addEventListener("click", function () {
    inputWeight.placeholder = "Kg";
    inputHeight.placeholder = "cm";
  });
}

if (radioImperial) {
  radioImperial.addEventListener("click", function () {
    inputWeight.placeholder = "lb";
    inputHeight.placeholder = "in";
  });
}

const calcDisplayBMI = function () {
  if (!inputHeight.value || !inputWeight.value) {
    labelSubmitError.classList.remove("hidden");
  } else {
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

    labelSubmitError.classList.add("hidden");
  }

  inputWeight.value = inputHeight.value = "";
};

// BMI Calculation and Display
if (btnSubmit) {
  btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    calcDisplayBMI();
  });
}

// Mobile Navigation

btnMobileMenuOpen.addEventListener("click", function () {
  btnMobileMenuOpen.classList.add("hidden");
  btnMobileMenuClose.classList.remove("hidden");

  containerMobileMenu.classList.add("flex");
  containerMobileMenu.classList.remove("-translate-x-full");
});

btnNavLinks.addEventListener("click", function () {
  btnMobileMenuClose.classList.add("hidden");
  btnMobileMenuOpen.classList.remove("hidden");

  containerMobileMenu.classList.add("-translate-x-full");
  containerMobileMenu.classList.remove("flex");
});

btnMobileMenuClose.addEventListener("click", function () {
  btnMobileMenuClose.classList.add("hidden");
  btnMobileMenuOpen.classList.remove("hidden");

  containerMobileMenu.classList.add("-translate-x-full");
  containerMobileMenu.classList.remove("flex");
});
