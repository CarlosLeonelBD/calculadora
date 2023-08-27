let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    currentOperator = operator;
    firstOperand = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '') return;
    
    secondOperand = currentInput;
    let result;
    
    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}
