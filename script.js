let ans = '';
let displayValue = '';
let value1 = '';
let value2 = '';
let operator;
let decimal = 'enabled';

const operationContent = document.querySelector('.operation-display');
const displayContent = document.querySelector('.number-display');
const clear = document.querySelector('.clear');
const deleteOne = document.querySelector('.delete');

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

clear.onclick = () => {
  displayClear();
}

deleteOne.onclick = () => {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  displayContent.textContent = displayValue;
}

function decimalHandler() {
  if (decimal === 'enabled') {
    displayValue += '.';
    displayContent.textContent = displayValue;
    decimal = 'disabled';
  } else {
    displayValue = displayValue;
    displayContent.textContent = displayValue;
  }
}

function display(value) {
  if (operator === '=') {
    resetValues();
    operator = '';
    displayValue = '' + value;
    displayContent.textContent = displayValue;
  } else {
  if (value === '.') {
    decimalHandler();
  } else {
    displayValue += value;
    displayContent.textContent = displayValue;
  }
  }
}

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

document.addEventListener('keydown', (event) => {
  if (event.key === '0') {
    displayValue += 0;
    displayContent.textContent = displayValue;
  } else if (event.key === '1') {
    displayValue += 1;
    displayContent.textContent = displayValue;
  } else if (event.key === '2') {
    displayValue += 2;
    displayContent.textContent = displayValue;
  } else if (event.key === '3') {
    displayValue += 3;
    displayContent.textContent = displayValue;
  } else if (event.key === '4') {
    displayValue += 4;
    displayContent.textContent = displayValue;
  } else if (event.key === '5') {
    displayValue += 5;
    displayContent.textContent = displayValue;
  } else if (event.key === '6') {
    displayValue += 6;
    displayContent.textContent = displayValue;
  } else if (event.key === '7') {
    displayValue += 7;
    displayContent.textContent = displayValue;
  } else if (event.key === '8') {
    displayValue += 8;
    displayContent.textContent = displayValue;
  } else if (event.key === '9') {
    displayValue += 9;
    displayContent.textContent = displayValue;
  } else if (event.key === '.') {
    decimalHandler();
  } else if (event.key === '+') {
    operate('+');
  } else if (event.key === '-') {
    operate('-');
  } else if (event.key === '/') {
    operate('/');
  } else if (event.key === '*') {
    operate('*');
  } else if (event.key === '=') {
    operate('=');
  }
});