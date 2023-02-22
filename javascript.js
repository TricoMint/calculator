let display = 0;

document.getElementById("readout").innerText = display;

function add(num, num2) {
    let add;
    add = num + num2;
    return add
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

const one = document.getElementById("one");
one.addEventListener('click', displayValueOne);

function displayValueOne() {
    display = display + "" + 1;
    document.getElementById("readout").innerText = display;
    return display
}