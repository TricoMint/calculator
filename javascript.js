// Variable Declaration Area

let display = "";
let newDisplay = "";
let placeholder = 0;

const zero = document.getElementById("zero");
zero.addEventListener('click', displayValueZero);
const one = document.getElementById("one");
one.addEventListener('click', displayValueOne);
const two = document.getElementById("two");
two.addEventListener('click', displayValueTwo);
const three = document.getElementById("three");
three.addEventListener('click', displayValueThree);
const four = document.getElementById("four");
four.addEventListener('click', displayValueFour);
const five = document.getElementById("five");
five.addEventListener('click', displayValueFive);
const six = document.getElementById("six");
six.addEventListener('click', displayValueSix);
const seven = document.getElementById("seven");
seven.addEventListener('click', displayValueSeven);
const eight = document.getElementById("eight");
eight.addEventListener('click', displayValueEight);
const nine = document.getElementById("nine");
nine.addEventListener('click', displayValueNine);
const addition = document.getElementById("add");
addition.addEventListener('click', add);

//Function declaration area

function add() {
    let nonnum = Number(display);
    placeholder = nonnum + placeholder;
    display = newDisplay;
    return placeholder
}

function subtract(num, num2) {
    let subtract;
    subtract = num - num2;
    return subtract
}

function multiply(num, num2) {
    let multiply;
    multiply = num * num2;
    return multiply;
}

function divide(num, num2) {
    let divide;
    divide = (num / num2);
    return divide;
}

function displayValueZero() {
    if(display == 0) {return display};
    display = display + 0;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueOne() {
    display = display + 1;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueTwo() {
    display = display + 2;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueThree() {
    display = display + 3;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueFour() {
    display = display + 4;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueFive() {
    display = display + 5;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueSix() {
    display = display + 6;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueSeven() {
    display = display + 7;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueEight() {
    display = display + 8;
    document.getElementById("readout").innerText = display;
    return display
}

function displayValueNine() {
    display = display + 9;
    document.getElementById("readout").innerText = display;
    return display
}