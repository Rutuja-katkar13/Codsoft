let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
    } else if (operator === '') {
        operand1 += value;
        display.textContent = operand1;
    } else {
        operand2 += value;
        display.textContent = operand2;
    }
}

function clearDisplay() {
    display.textContent = '0';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculate() {
    let result;
    let num1 = parseFloat(operand1);
    let num2 = parseFloat(operand2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.textContent = result;
    operand1 = result.toString();
    operand2 = '';
    operator = '';
}
