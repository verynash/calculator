const calculator = {
    displayValue: '0',
    firstNumber: null,
    waitingForSecondNumber: false,
    operator: null,
    calculated: false,
}

function updateDisplay() {
    let display = document.getElementById('display');
    display.textContent = calculator.displayValue;
}

updateDisplay();

const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.matches('button')) {
            return;
        }
        if (target.classList.contains('number-btn')) {
            console.log('digit', target.value)
            inputValue(target.value)
            updateDisplay()
        }
        if (target.classList.contains('decimal-btn')) {
            console.log('decimal', target.value)
            inputDecimal(target.value);
            updateDisplay();
        }
        if (target.classList.contains('operator-btn')) {
            console.log('operator', target.value)
            calculate();
            inputOperator(target.value);
            updateDisplay();
        }    
        if (target.classList.contains('operate-btn')) {
            console.log('operate', target.value)
            calculate();
            updateDisplay();

        }
        if (target.classList.contains('clear-btn')) {
            resetCalculator();
            updateDisplay();
        }
    })};


function inputValue(number) {
    let displayValue = calculator.displayValue;
    const waitingForSecondNumber = calculator.waitingForSecondNumber;
    
    if (waitingForSecondNumber === true && displayValue === '0.') {
        calculator.displayValue = displayValue + number;
        calculator.waitingForSecondNumber = false;
    }
    else if (waitingForSecondNumber === true) {
        calculator.displayValue = number;
        calculator.waitingForSecondNumber = false;
    } else {
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
    console.log(calculator)
}

function inputDecimal(period) {
    if (calculator.waitingForSecondNumber === true) {
        calculator.displayValue = '0.';
    }
    if (!calculator.displayValue.includes(period)) {
        calculator.displayValue += period;
    }
}

function inputOperator(nextOperator) {
    let firstNumber = calculator.firstNumber;
    let displayValue = calculator.displayValue;
    let displayNumber = parseFloat(displayValue);
    calculator.operator = nextOperator;

    if (firstNumber === null && !isNaN(displayNumber)) {
        calculator.firstNumber = displayNumber;
    } else {
        calculator.firstNumber = displayNumber
    }
    calculator.waitingForSecondNumber = true;
}

function calculate(a, b) {
    a = calculator.firstNumber;
    b = calculator.displayValue;
    if (calculator.operator === "+") {
        calculator.displayValue = parseFloat(a) + parseFloat(b);
    }
    else if (calculator.operator === "-") {
        calculator.displayValue = parseFloat(a) - parseFloat(b);
    }
    else if (calculator.operator === "*") {
        calculator.displayValue = parseFloat(a) * parseFloat(b);
    } else if (calculator.operator === "/" && calculator.displayValue === "0") {
        calculator.displayValue = "Good Try Pal";
    } else if (calculator.operator === "/") {
        calculator.displayValue = parseFloat(a) / parseFloat(b);
    }
    calculator.calculated = true;
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
    calculator.operator = null;
}


function add(a,b) {
    total = a + b;
    return total;
}

function subtract(a,b) {
    total = a - b;
    return total;
}

function multiply(a,b) {
    total = a * b;
    return total;
}

function divide(a,b) {
    total = a / b;
    return total;
}