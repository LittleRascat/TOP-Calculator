let ans = '';
let displayValue = '';
let value1 = '';
let value2 = '';
let operator;

function add(num1, num2) {
  ans = num1 + num2;
  return ans;
}

function subtract(num1, num2) {
  ans = num1 - num2;
  return ans;
}

function multiply(num1, num2) {
  ans = num1 * num2;
  return ans;
}

function divide(num1, num2) {
  ans = num1 / num2;
  return ans;
}



function operations(num1, operator, num2) {
  if (num2 !== '') {
    if (operator === '+') {
      ans = add(num1, num2);
    } else if (operator === '-') {
      ans = subtract(num1, num2);
    } else if (operator === '*') {
      ans = multiply(num1, num2);
    } else if (operator === '/') {
      ans = divide(num1, num2);
    } else {
      displayContent.textContent = ans;
    }
  } else {
    ans = num1;
  }
}

let displayContent = document.querySelector('.number-display');

function displayClear() {
  displayValue = '';
  operationContent.textContent = '';
  displayContent.textContent = displayValue;
  value1 = '';
  value2 = '';
  ans = '';
}

const clear = document.querySelector('.clear');

clear.onclick = () => {
  displayClear();
}

const deleteOne = document.querySelector('.delete');

deleteOne.onclick = () => {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  displayContent.textContent = displayValue;
}

function display(value) {
  if (operator === '=') {
    displayValue = '';
    value1 = '';
    value2 = '';
  }
  displayValue += value;
  displayContent.textContent = displayValue;
}

const operationContent = document.querySelector('.operation-display');

function operate(value) {
  if (value1 === '') {
    operator = value;
    value1 = displayValue * 1;
    operationContent.textContent = value1 + ' ' + operator;
    displayValue = '';
  } else {
    value2 = displayValue * 1;
    operationContent.textContent = value1 + ' ' + operator;
    operations(value1, operator, value2);
    if (value === '=') {
      operationContent.textContent = value1 + ' ' + operator + ' ' + value2;
      operator = value;
      operations(value1, operator, value2);
    } else {
      value1 = ans;
      operator = value;
      operationContent.textContent = value1 + ' ' + operator;
      value2 = displayValue * 1;
      displayValue = '';
    }
  }
}

