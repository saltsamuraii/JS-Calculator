let btnPlus = document.querySelector('#buttonPlus')
let btnMinus = document.querySelector('#buttonMinus')
let btnMultiply = document.querySelector('#buttonMultiply')
let btnDivide = document.querySelector('#buttonDivide')


let number1 = document.querySelector('#number1').value
let number2 = document.querySelector('#number2').value



function sum() {
    let a = +number1
    let b = +number2
    let result;
    result = a + b

    document.querySelector('#result').innerHTML = result;
}

function minus() {
    let a = number1
    let b = number2
    let result;
    result = a - b

    document.querySelector('#result').innerHTML = result;
}

function multiply() {
    let a = number1
    let b = number2
    let result;
    result = a * b

    document.querySelector('#result').innerHTML = result;
}

function divide() {
    let a = number1
    let b = number2
    let result;
    result = a / b

    document.querySelector('#result').innerHTML = result;
}


btnPlus.addEventListener('click', sum)
btnMinus.addEventListener('click', minus)
btnMultiply.addEventListener('click', multiply)
btnDivide.addEventListener('click', divide)



