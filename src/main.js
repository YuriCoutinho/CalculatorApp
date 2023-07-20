const updateExpression = (number, operator = "") => {
  const currentNumberExists = !!currentNumber.innerText;
  const currentExpressionExists = !!expression.innerText;
  if (currentNumberExists) {
    expression.innerText += ` ${number} ${operator} `;
  }else if(currentExpressionExists){
    updateLastOperator(operator);
  }
  clearCurrentNumber();
};

const updateLastOperator = (operator)=> {
  const amountOfCharacters = expression.innerText.length;
  let expressionFormatted = expression.innerText.substring(
    0,
    amountOfCharacters - 1
  );
  expressionFormatted += operator;
  expression.innerText = expressionFormatted;
}

const updateResult = () => {
  const currentNumberExists = !!currentNumber.innerText;
  const currentExpressionExists = !!expression.innerText;

  if (!currentNumberExists && !currentExpressionExists) {
    return;
  }

  if (currentNumberExists) {
    result = eval(`${expression.innerText} + ${currentNumber.innerText} `);
    currentNumber.innerText = result;
    return;
  }

  if (currentExpressionExists) {
    const amountOfCharacters = expression.innerText.length;
    const lastCharacter = expression.innerText[amountOfCharacters - 1];

    expression.innerText = expression.innerText.substring(
      0,
      amountOfCharacters - 1
    );
    result = eval(`${expression.innerText}`);
    currentNumber.innerText = result;
    return;
  }
};

const clearExpression = () => {
  expression.innerText = "";
};

const clearCurrentNumber = () => {
  currentNumber.innerText = "";
};

const resetResult = () => {
  result = 0;
};

const clearAll = () => {
  clearExpression();
  clearCurrentNumber();
  resetResult();
};

clearButton.addEventListener("click", () => {
  clearAll();
});

deleteButton.addEventListener("click", () => {
  clearCurrentNumber();
});

assignmentButton.addEventListener("click", () => {
  updateResult();
  clearExpression();
});

operatorsButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (event) => {
    const operator = event.target.innerText;
    const number = currentNumber.innerText;

    if (operator !== "=") {
      updateExpression(number, operator);
    }
  });
});

numbersButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (event) => {
    const number = event.target.innerText;
    currentNumber.innerText += number;
  });
});
