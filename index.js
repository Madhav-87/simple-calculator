
let div = document.getElementById('answer-div');
let text = document.getElementById('answer-text');
function add() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let answer = (parseFloat(num1) + parseFloat(num2));
    div.style.visibility = "visible";
    text.innerText = `${answer}`;
}
function sub() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let answer = (parseFloat(num1) - parseFloat(num2));
    div.style.visibility = "visible";
    text.innerText = `${answer}`;
}
function mul() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let answer = (parseFloat(num1) * parseFloat(num2));
    div.style.visibility = "visible";
    text.innerText = `${answer}`;
}
function divi() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let answer = (parseFloat(num1) / parseFloat(num2));
    div.style.visibility = "visible";
    text.innerText = `${answer}`;
}
function mod() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let answer = (parseFloat(num1) % parseFloat(num2));
    div.style.visibility = "visible";
    text.innerText = `${answer}`;
}
