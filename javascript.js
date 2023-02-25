let display = "";
let newDisplay = "";

const readout = document.getElementById("readout");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
document.getElementById("zero").addEventListener('click', readoutZero);
document.getElementById("one").addEventListener('click', readoutOne);
document.getElementById("two").addEventListener('click', readoutTwo);
document.getElementById("three").addEventListener('click', readoutThree);
document.getElementById("four").addEventListener('click', readoutFour);
document.getElementById("five").addEventListener('click', readoutFive);
document.getElementById("six").addEventListener('click', readoutSix);
document.getElementById("seven").addEventListener('click', readoutSeven);
document.getElementById("eight").addEventListener('click', readoutEight);
document.getElementById("nine").addEventListener('click', readoutNine);

const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
addition.addEventListener('click', added);
subtraction.addEventListener('click', subtracted);


let num1;
let num2 = 0;
let result;
let lastOperator = "none";

let a;

function added() {
    num1 = Number(display);
    operate(num1, num2, lastOperator);
    num2 = num2 + num1;
    readout.innerText = num2;
    display = newDisplay;
    lastOperator = "+";
}

function subtracted() {
    num1 = Number(display);
    if(num2 == 0) {num2 = num1 + num1}
    operate(num1, num2, lastOperator);
    num2 = num2 - num1;
    readout.innerText = num2;
    display = newDisplay;
    lastOperator = "-";
}

function operate(num1, num2, operator) {
    if (lastOperator == "none") {return num1 = Number(display)}
    if (operator == "+") {add(num1, num2)}
    else if (operator == "-") {subtract(num1, num2)}
    else if (operator == "*") {multiply(num1, num2)}
    else if (operator == "/") {divide(num1, num2)}
        function add(num1, num2) {
            a = num1 + num2;
            return a;   
        }
        function subtract(num1, num2) {
            a = num1 - num2;
            return a;   
        }
        function multiply(num1, num2) {
            a = num1 * num2;
         return a;   
        }
        function divide(num1, num2) {
         a = num1 / num2;
         return a;   
        }
    return a
    }


function readoutZero(){
    if (display == 0) {return};
    display = display + 0;
    readout.innerText = display;
}

function readoutOne(){
    display = display + 1;
    readout.innerText = display;
}

function readoutTwo(){
    display = display + 2;
    readout.innerText = display;
}

function readoutThree(){
    display = display + 3;
    readout.innerText = display;
}

function readoutFour(){
    display = display + 4;
    readout.innerText = display;
}

function readoutFive(){
    display = display + 5;
    readout.innerText = display;
}

function readoutSix(){
    display = display + 6;
    readout.innerText = display;
}

function readoutSeven(){
    display = display + 7;
    readout.innerText = display;
}

function readoutEight(){
    display = display + 8;
    readout.innerText = display;
}

function readoutNine(){
    display = display + 9;
    readout.innerText = display;
}