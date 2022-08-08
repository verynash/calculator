const calculator = {
    displayValue: '0',
    firstNumber: null,
    waitingForSecondOperand: false,
    operator: null
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
        if (target.classList.contains('operator-btn')) {
            console.log('operator', target.value)
        } 
        if (target.classList.contains('operate-btn')) {
            console.log('operate', target.value)
        }
    });
}

function inputValue(number) {
    let display = calculator.displayValue;
    calculator.displayValue = display === '0' ? number : display + number;
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