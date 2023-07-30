
let firstNum = '';
let operator = '';
let secondNum = '';
let displayItem = '';

const display = document.getElementById('display');

const clear = document.getElementById('clear')
const clearEntry = document.getElementById('clear-entry')

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
    displayInput(newInput);

    if (newInput.length === 0) display.textContent = '0';
};

function clearAll() {
    display.textContent = '0';
    firstNum = '';
    operator = '';
    displayItem = '';
    secondNum = '';
};

const operation = {
    '+': function (num1, num2) {return +(num1) + +(num2)},
    '-': function (num1, num2) {return +(num1) - +(num2)},
    '*': function (num1, num2) {return +(num1) * +(num2)},
    '/': function (num1, num2) {
        if (num2 == 0) return 'You Crazy';
        return +(num1) / +(num2);
    },
};

function displayInput(num) {
    displayItem += num;
    if (display.textContent.length >= 12) {
        const displayArr = displayItem.toString().split('');
        displayItem = displayArr.splice(0, 12).join('');
    };
    display.textContent = displayItem;
};

function runOperation() {
    secondNum = display.textContent;
    if (operator !== '') {
        let result = operation[operator](firstNum, secondNum);
         
        if (result.toString().length > 11) {
            const resultArr = result.toString().split('');
            result = resultArr.splice(0, 11).join('');
        };
        
        displayItem = '';
        operator = '';
        displayInput(result);
    };
};

function setAndReset(item) {
    firstNum = display.textContent;
    operator = item;
    displayItem = '';
    secondNum = '';
};

function getNum(e) {
    const numBtn = e.target.dataset.number;
    const numKey = document.querySelector(`button[data-number="${e.key}"]`);
    if(numKey) {
        if(display.textContent.includes('.') && numKey.dataset.number == '.') return;
        displayInput(numKey.dataset.number);
    } else if (numBtn) {
        if(display.textContent.includes('.') && numBtn == '.') return;
        displayInput(numBtn);
    };
};

function getOpKey(e) {
    const opKey = document.querySelector(`button[data-operator="${e.key}"]`);
    if(!opKey) return;
    runOperation();
    if (e.key === '=') return;
    setAndReset(opKey.dataset.operator);
};

function runActKey(e) {
    const actKey = document.querySelector(`button[data-action="${e.key}"]`);
    if(!actKey) return;
    switch(e.key) {
        case 'Backspace':
            clearChar();
            break;
        case 'Enter':
            runOperation();
    };
};

function setupEventListeners() {

    clear.addEventListener('click', clearAll);
    clearEntry.addEventListener('click', clearChar);

    num1.addEventListener('click', getNum);
    num2.addEventListener('click', getNum);
    num3.addEventListener('click', getNum);
    num4.addEventListener('click', getNum);
    num5.addEventListener('click', getNum);
    num6.addEventListener('click', getNum);
    num7.addEventListener('click', getNum);
    num8.addEventListener('click', getNum);
    num9.addEventListener('click', getNum);
    num0.addEventListener('click', getNum);
    decimal.addEventListener('click', getNum);

    plus.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.dataset.operator);
    });
    minus.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.dataset.operator);
    });
    multiply.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.dataset.operator);
    });
    divide.addEventListener('click', (e) => {
        runOperation();
        setAndReset(e.target.dataset.operator);
    });
    equal.addEventListener('click', () => {
        runOperation()
    });

    document.addEventListener('keydown', (e) => {
        getNum(e);
        getOpKey(e);
        runActKey(e);
    });
};

setupEventListeners();