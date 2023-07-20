let currentNumber = document.querySelector("#current-number");
let expression = document.querySelector("#expression");
let result = 0;

const clearButton = document.querySelector("#all-clear");
const deleteButton = document.querySelector("#delete");
const assignmentButton = document.querySelector("#assignment-operator");

const divOperatorButton = document.querySelector("#division-operator");
const multOperatorButton = document.querySelector("#multiplier-operator");
const subOperatorButton = document.querySelector("#subtraction-operator");
const sumOperatorButton = document.querySelector("#sum-operator");

const numbersButtons = Array.from(
  document.querySelectorAll(".keyboard-numbers__number")
);

const operatorsButtons = Array.from(
  document.querySelectorAll(".keyboard__operator")
);
