function calculate() {
    var num1 = parseFloat(document.getElementById('calcNum1').value);
    var operator = document.getElementById('calcOperator').value;
    var num2 = parseFloat(document.getElementById('calcNum2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers.';
    } else if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = 'Cannot divide by zero.';
        }
    } else {
        result = 'Please enter a valid operator (+, -, *, /).';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}