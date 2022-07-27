"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minLengthValidation = minLengthValidation;
exports.emailValidation = emailValidation;

function minLengthValidation(inputData, minLength) {
  var value = inputData.value;
  removeClassErrorSucces(inputData);

  if (value.length >= minLength) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("failure");
    return false;
  }
}

function emailValidation(inputData) {
  var emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var value = inputData.value;
  removeClassErrorSucces(inputData);
  var resultValidation = emailValid.test(value);

  if (resultValidation) {
    inputData.classList.add("sucess");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

function removeClassErrorSucces(inputData) {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
}