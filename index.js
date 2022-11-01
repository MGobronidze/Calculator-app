let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl= document.getElementById('sum-el')

function Addition(){
let sum = num1 + num2
sumEl.textContent = "sum: " + sum;
}
function Substruction(){
let sub = num1 - num2
sumEl.textContent = "substruction: " + sub;
}
function Multiplication(){
let mult = num1 + num2
sumEl.textContent = "multiplication: " + mult;
}
function Division(){
let div = num1 + num2
sumEl.textContent = "division: " +div;
}