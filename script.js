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
    if (operator === 'add') {
      ans = add(num1, num2);
    } else if (operator === 'subtract') {
      ans = subtract(num1, num2);
    } else if (operator === 'multiply') {
      ans = multiply(num1, num2);
    } else if (operator === 'divide') {
      ans = divide(num1, num2);
    } else {
      displayContent.textContent = ans;
    }
  } else {
    ans = num1;
  }
}

let displayContent = document.querySelector('.display');

function displayClear() {
  displayValue = '';
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
  if (operator === 'equal' && value2 === '') {
    displayValue = '';
    value1 = '';
    value2 = '';
  }
  displayValue += value;
  displayContent.textContent = displayValue;
}

const numberClear = document.querySelector('.number');

function operate(value) {
  if (value === 'equal' && value2 === '') {
    displayValue = displayValue;
  }
  if (value1 === '') {
    value1 = displayValue * 1;
    operator = value;
    displayValue = '';
  } else {
    value2 = displayValue * 1;
    operations(value1, operator, value2);
    operator = value;
    if (value === 'equal') {
      operations(value1, operator, value2);
      numberClear.onclick = () => {
        displayClear();
      }
    } else {
      value1 = ans;
      value2 = displayValue * 1;
      displayValue = '';
    }
  }
}

