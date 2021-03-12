let btnPlus = document.querySelector('#buttonPlus')
let btnMinus = document.querySelector('#buttonMinus')
let btnMultiply = document.querySelector('#buttonMultiply')
let btnDivide = document.querySelector('#buttonDivide')


let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')

let result = document.querySelector('#result').value


function sum() {
    let a = +number1.value
    let b = +number2.value
    let result = a + b

    alert(result)
}

function minus() {
    let a = number1.value
    let b = number2.value

    alert(a - b)
}

function multiply() {
    let a = number1.value
    let b = number2.value

    alert(a * b)
}

function divide() {
    let a = number1.value
    let b = number2.value

    alert(a / b)
}


btnPlus.addEventListener('click', sum)
btnMinus.addEventListener('click', minus)
btnMultiply.addEventListener('click', multiply)
btnDivide.addEventListener('click', divide)



