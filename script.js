let ans = '';
let displayValue = '';
let value1 = '';
let value2 = '';
let operator;
let decimal = 'enabled';

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
      if (num2 !== 0) {
        ans = divide(num1, num2);
      } else {
        ans = 'What are you doing?'
      }      
    } else {
      displayContent.textContent = ans.toFixed(7)*1;
    }
  } else {
    ans = num1;
  }
}

let displayContent = document.querySelector('.number-display');

function resetValues() {
  value1 = '';
  value2 = '';
  ans = '';
  decimal = 'enabled';
}

function displayClear() {
  displayValue = '';
  operationContent.textContent = '';
  displayContent.textContent = displayValue;
  resetValues();
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
    resetValues();
    operator = '';
    displayValue = '' + value;
    displayContent.textContent = displayValue;
  } else {
  if (value === '.') {
    if (decimal === 'enabled') {
      displayValue += value;
      displayContent.textContent = displayValue;
      decimal = 'disabled';
    } else {
      displayValue = displayValue;
      displayContent.textContent = displayValue;
    }
  } else {
    displayValue += value;
    displayContent.textContent = displayValue;
  }
  }
}

const operationContent = document.querySelector('.operation-display');

function operate(value) {
  decimal = 'enabled';
  if (value1 === '') {
    operator = value;
    if (operator !== '=') {
      value1 = displayValue * 1;
      operationContent.textContent = value1.toFixed(3)*1 + ' ' + operator;
      displayValue = '';
    } else {
      displayValue = displayValue;
    }
  } else {
    value2 = displayValue * 1;
    operationContent.textContent = value1.toFixed(3)*1 + ' ' + operator;
    operations(value1, operator, value2);
    if (value === '=') {
      operationContent.textContent = value1.toFixed(3)*1 + ' ' + operator + ' ' + value2.toFixed(3)*1;
      operator = value;
      operations(value1, operator, value2);
      displayValue = '';
    } else {
      if (ans === 'What are you doing?') {
        displayContent.textContent = ans;
        displayValue = '';
        operationContent.textContent = value1.toFixed(3)*1 + ' ' + operator + ' ' + value2.toFixed(3)*1;
        resetValues();
      } else {
        value1 = ans;
        operator = value;
        operationContent.textContent = value1.toFixed(3)*1 + ' ' + operator;
        value2 = displayValue * 1;
        displayValue = '';
      }
    }
  }
}

