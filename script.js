
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result;
    previousInput = '';
    operator = '';
}






