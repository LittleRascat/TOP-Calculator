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
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const sqrt = document.querySelector('.sqrt');
const sin = document.querySelector('.sin');
const cos = document.querySelector('.cos');
const tan = document.querySelector('.tan');
const asin = document.querySelector('.asin');
const acos = document.querySelector('.acos');
const atan = document.querySelector('.atan');
const sq = document.querySelector('.sq');
const fac = document.querySelector('.fac');

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

function exponent(num1, num2) {
  ans = num1 ** num2;
  return ans;
}

function root(num1, num2) {
  ans = num1 ** (1/num2);
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
    } else if (operator === '^') {
      ans = exponent(num1, num2);
    } else if (operator === 'R') {
      ans = root(num1, num2);
    } else {
      displayContent.textContent = ans.toFixed(7)*1;
    }
  } else {
    ans = num1;
  }
}

function toDegrees(angle) {
  return angle * (180/Math.PI);
}

function toRadians(angle) {
  return angle * (Math.PI/180);
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

function factorial(num1) {
  for (let i=num1-1; i>0; i--) {
    num1 *= i;
  }
  return num1;
}

clear.onclick = () => {
  displayClear();
}

deleteOne.onclick = () => {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  displayContent.textContent = displayValue;
}

negative.onclick = () => {
  displayValue *= -1;
  displayContent.textContent = displayValue;
}

percent.onclick = () => {
  displayValue /= 100;
  displayContent.textContent = displayValue;
}

sqrt.onclick = () => {
  displayValue = Math.sqrt(displayValue);
  displayContent.textContent = displayValue;
}

sq.onclick = () => {
  displayValue = displayValue ** 2;
  displayContent.textContent = displayValue;
}

sin.onclick = () => {
  if (document.getElementById('degrees').checked) {
    displayValue = Math.sin(toRadians(displayValue));
  } else {
    displayValue = Math.sin(displayValue);
  }
  displayContent.textContent = displayValue;
}

cos.onclick = () => {
  if (document.getElementById('degrees').checked) {
    displayValue = Math.cos(toRadians(displayValue));
  } else {
    displayValue = Math.cos(displayValue);
  }
  displayContent.textContent = displayValue;
}

tan.onclick = () => {
  if (document.getElementById('degrees').checked) {
    displayValue = Math.tan(toRadians(displayValue));
  } else {
    displayValue = Math.tan(displayValue);
  }
  displayContent.textContent = displayValue;
}

asin.onclick = () => {
  if (document.getElementById('degrees').checked) {
    displayValue = toDegrees(Math.asin(displayValue));
  } else {
    displayValue = Math.asin(displayValue);
  }
  displayContent.textContent = displayValue;
}

acos.onclick = () => {
  if (document.getElementById('degrees').checked) {
    displayValue = toDegrees(Math.acos(displayValue));
  } else {
    displayValue = Math.acos(displayValue);
  }
  displayContent.textContent = displayValue;
}

atan.onclick = () => {
  if (document.getElementById('degrees').checked) {
    displayValue = toDegrees(Math.atan(displayValue));
  } else {
    displayValue = Math.atan(displayValue);
  }
  displayContent.textContent = displayValue;
}

fac.onclick = () => {
  displayValue = factorial(displayValue);
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
    display('0');
  } else if (event.key === '1') {
    display('1');
  } else if (event.key === '2') {
    display('2');
  } else if (event.key === '3') {
    display('3');
  } else if (event.key === '4') {
    display('4');
  } else if (event.key === '5') {
    display('5');
  } else if (event.key === '6') {
    display('6');
  } else if (event.key === '7') {
    display('7');
  } else if (event.key === '8') {
    display('8');
  } else if (event.key === '9') {
    display('9');
  } else if (event.key === '.') {
    display('.');
  } else if (event.key === '+') {
    operate('+');
  } else if (event.key === '-') {
    operate('-');
  } else if (event.key === '/') {
    operate('/');
  } else if (event.key === '*') {
    operate('*');
  } else if (event.key === '^') {
    operate('^');
  } else if (event.key === '=') {
    operate('=');
  } else if (event.key === 'Enter') {
    operate('=');
  } else if (event.key === 'Escape') {
    displayClear();
  } else if (event.key === 'Backspace') {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    displayContent.textContent = displayValue;
  } else if (event.key === '%') {
    displayValue /= 100;
    displayContent.textContent = displayValue;
  }
});