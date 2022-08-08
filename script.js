const calculator = {
    displayValue: '0',
    firstNumber: null,
    waitingForSecondNumber: false,
    operator: null,
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
            inputOperator(target.value);
        } 
        if (target.classList.contains('operate-btn')) {
            console.log('operate', target.value)
        }
        if (target.classList.contains('clear-btn')) {
            console.log('clear', target.value)
        }
    });
}

function inputValue(number) {
    const displayValue = calculator.displayValue;
    calculator.displayValue = displayValue === '0' ? number : displayValue + number;
}

function inputDecimal(period) {
    if (!calculator.displayValue.includes(period)) {
        calculator.displayValue += period;
    }
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