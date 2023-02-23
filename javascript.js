// Variable Declaration Area

let display = "";
let newDisplay = "";
let placeholder;
let nonnum;
let lastoperator;

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

function equals() {
    if (lastoperator == "add"){
        console.log(placeholder);
        console.log(display);
        return readout.innerText = placeholder + Number(display)}
    
    if (lastoperator == "subtract") {
        console.log(placeholder);
        console.log(display);
        return readout.innerText = placeholder - Number(display)
    }    
}

let test = 0;

function add() {
    placeholder = placeholder + test;
    readout.innerText = placeholder;
    test = placeholder;
    display = newDisplay;
    lastoperator = "add";
}

function subtract() {
    displayNum = Number(display);
    placeholder = placeholder - displayNum;
    readout.innerText = placeholder;
    display = newDisplay;
    lastoperator = "subtract"
    return placeholder
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
    readout.innerText = display;
    return display
}

function displayValueOne() {
    display = display + 1;
    readout.innerText = display;
    placeholder = Number(display);
    return display
}

function displayValueTwo() {
    display = display + 2;
    readout.innerText = display;
    return display
}

function displayValueThree() {
    display = display + 3;
    readout.innerText = display;
    return display
}

function displayValueFour() {
    display = display + 4;
    readout.innerText = display;
    return display
}

function displayValueFive() {
    display = display + 5;
    readout.innerText = display;
    return display
}

function displayValueSix() {
    display = display + 6;
    readout.innerText = display;
    return display
}

function displayValueSeven() {
    display = display + 7;
    readout.innerText = display;
    return display
}

function displayValueEight() {
    display = display + 8;
    readout.innerText = display;
    return display
}

function displayValueNine() {
    display = display + 9;
    readout.innerText = display;
    return display
}