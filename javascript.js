// Variable Declaration Area

let display = "";
let newDisplay = "";
let lastoperator = "none";

const readout = document.getElementById("readout");

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
const added = document.getElementById("add");
added.addEventListener('click', add);
const subtracted = document.getElementById("subtract");
subtracted.addEventListener('click', subtract)
const equaled = document.getElementById("equals");
equaled.addEventListener('click', equals);

//Function declaration area


let num1 = "";
let num2 = "yap";
let storage;

function add() {
    if (lastoperator == "subtract"){
        readout.innerText = num2 - num1;
        num2 = num2 - num1;
        display = newDisplay;
        lastoperator = "add";
        return
    }
    num2 = num1 + num2;
    readout.innerText = num2;
    display = newDisplay;
    lastoperator = "add";
}

function subtract() {
    if (num2 == "yap"){
        num2 = num1;
        readout.innerText = num1;
        display = newDisplay;
        lastoperator = "subtract";
        return} 
    else if (lastoperator == "add"){
        num2 = num1 + num2;
    readout.innerText = num2;
    display = newDisplay;
    lastoperator = "subtract";
    return
    }
    readout.innerText = num2 - num1;
    num2 = num2 - num1;
    display = newDisplay;
    lastoperator = "subtract";
}

function multiply(num, num2) {
    let multiply;
    multiply = num * num2;
}

function divide(num, num2) {
    let divide;
    divide = (num / num2);
}

function displayValueZero() {
    if(display == 0) {return display};
    display = display + 0;
    readout.innerText = display;
}

function displayValueOne() {
    display = display + 1;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueTwo() {
    display = display + 2;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueThree() {
    display = display + 3;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueFour() {
    display = display + 4;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueFive() {
    display = display + 5;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueSix() {
    display = display + 6;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueSeven() {
    display = display + 7;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueEight() {
    display = display + 8;
    num1 = Number(display);
    readout.innerText = display;
}

function displayValueNine() {
    display = display + 9;
    num1 = Number(display);
    readout.innerText = display;
}