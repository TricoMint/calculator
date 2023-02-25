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


let num1 = 0;
let num2 = 0;
let storage;

function equals(){
    if(lastoperator == "add") {
        readout.innerText = num1 + num2;}
    if(lastoperator == "subtract"){
        readout.innerText = num2 - Number(display);
    }
}

function add(){
    if (lastoperator == "subtract") {
        readout.innerText = num2 - num1;
        num2 = num2 - num1;
        display = newDisplay;
        return lastoperator = "add";
    }
    readout.innerText = num1 + num2;
    num2 = num1 + num2;
    display = newDisplay;
    lastoperator = "add";
    console.log(num1);
    console.log(num2);
}



function subtract(){
    if(num2 == 0) {num2 = num1 * 2};
    if (lastoperator == "add") {
        readout.innerText = num2 + num1;
        num2 = num2 + num1;
        display = newDisplay;
        return lastoperator = "subtract"
    }
    readout.innerText = num2 - num1;
    num2 = num2 - num1;
    display = newDisplay;
    lastoperator = "subtract";
    console.log(num1);
    console.log(num2);
}

/*function equals() {
    if (lastoperator == "add"){
        readout.innerText = storage + Number(display);
        console.log(storage)
        console.log(placeholder)
        storage = Number(display)
        placeholder = 0}
    if (lastoperator == "subtract") {
        readout.innerText = storage - Number(display);
        console.log(storage)
        console.log(placeholder)
    }    
} 

let test = 0;

let storage = 0; */

/*function add() {
    placeholder = Number(display);
    storage = placeholder + storage;
    readout.innerText = storage;
    console.log(storage);
    
    display = newDisplay;
    lastoperator = "add";
}*/

/*function subtract() {
    placeholder = Number(display);
    if(lastoperator == "none") {storage = placeholder * 2};
    storage = storage - placeholder;
    readout.innerText = storage;
    console.log(storage);
    display = newDisplay;
    lastoperator = "subtract";
} */

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
    readout.innerText = display;
}

function displayValueFour() {
    display = display + 4;
    readout.innerText = display;
}

function displayValueFive() {
    display = display + 5;
    readout.innerText = display;
}

function displayValueSix() {
    display = display + 6;
    readout.innerText = display;
}

function displayValueSeven() {
    display = display + 7;
    readout.innerText = display;
}

function displayValueEight() {
    display = display + 8;
    readout.innerText = display;
}

function displayValueNine() {
    display = display + 9;
    readout.innerText = display;
}