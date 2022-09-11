function add(num1, num2) {
  let ans = num1 + num2;
  return ans;
}

function subtract(num1, num2) {
  let ans = num1 - num2;
  return ans;
}

function multiply(num1, num2) {
  let ans = num1 * num2;
  return ans;
}

function divide(num1, num2) {
  let ans = num1 / num2;
  return ans;
}

function operate(num1, operator, num2) {
  let ans;
  if (operator === 'add') {
    ans = add(num1, num2);
  } else if (operator === 'subtract') {
    ans = subtract(num1, num2);
  } else if (operator === 'multiply') {
    ans = multiply(num1, num2);
  } else {
    ans = divide(num1, num2);
  }
  return ans;
}