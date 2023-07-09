
let firstNum = '';
let operator = '';
let secondNum = '';
let displayItem = '';

const display = document.getElementById('display');

const clear = document.getElementById('clear')
const clearAll = document.getElementById('clear-all')

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');
const decimal = document.getElementById('decimal');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');


function clearChar() {
    const displayArr = display.textContent.split('');
    displayArr.splice(-1,1);
    const newInput = displayArr.join('');
    displayItem = '';
    displayNum(newInput);

    if (newInput.length === 0) {
        display.textContent = '0';
        return;
    }
};

function resetAll() {
    display.textContent = '0';
    firstNum = '';
    operator = '';
    displayItem = '';
    secondNum = '';
};

const operators = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

function operate(num1, op, num2) {
    num1 = +num1;
    num2 = +num2;
    switch(op) {
        case '+':
            return sum = operators.add(num1, num2);
        case '-':
            return difference = operators.subtract(num1, num2);
        case 'x':
            return product = operators.multiply(num1, num2);
        case '÷':
            if (num2 === 0) {
                return 'You made Bobert go crazy.'
            };
            return quotient = operators.divide(num1, num2);
    }
};

function displayNum(num) {
    if (displayItem.length < 13) {
        displayItem += num;
        console.log(displayItem);
        
        if (displayItem.includes('.')) {
            console.log('true')
            decimal.removeEventListener('click', getValue)
        };

        display.textContent = displayItem;
    };
};

function runOperation() {
    secondNum = display.textContent;
    if ((num1 !== '' || num1 == '0') 
        && operator !== ''
        && (secondNum !== '' || secondNum == '0')) {
        const result = operate(firstNum, operator, secondNum);
        displayItem = '';
        secondNum = '';
        displayNum(result);
        decimal.addEventListener('click', getValue);
    };
};

function setAndReset(item) {
    firstNum = display.textContent;
    operator = item;
    displayItem = '';
    secondNum = '';
}

function getValue(event) {
    displayNum(event.target.value);
};

function setupEventListeners() {

    clear.addEventListener('click', clearChar);
    clearAll.addEventListener('click', resetAll);

    num1.addEventListener('click', (e) => displayNum(e.target.value));
    num2.addEventListener('click', (e) => displayNum(e.target.value));
    num3.addEventListener('click', (e) => displayNum(e.target.value));
    num4.addEventListener('click', (e) => displayNum(e.target.value));
    num5.addEventListener('click', (e) => displayNum(e.target.value));
    num6.addEventListener('click', (e) => displayNum(e.target.value));
    num7.addEventListener('click', (e) => displayNum(e.target.value));
    num8.addEventListener('click', (e) => displayNum(e.target.value));
    num9.addEventListener('click', (e) => displayNum(e.target.value));
    num0.addEventListener('click', (e) => displayNum(e.target.value));
    decimal.addEventListener('click', getValue);

    plus.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.value);
    });
    minus.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.value);
    });
    multiply.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.value);
    });
    divide.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.value);
    });
    equal.addEventListener('click', () => {
        runOperation()
    });
};

setupEventListeners();