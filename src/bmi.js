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
