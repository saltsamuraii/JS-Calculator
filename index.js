let btnPlus = document.querySelector('#buttonPlus')
let btnMinus = document.querySelector('#buttonMinus')
let btnMultiply = document.querySelector('#buttonMultiply')
let btnDivide = document.querySelector('#buttonDivide')


let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')

//let result = document.querySelector('#result')


function sum() {
    number1 = +number1.value
    number2 = +number2.value

    console.log(number1 + number2)
}

function minus() {
    number1 = number1.value
    number2 = number2.value

    console.log(number1 - number2)
}

function multiply() {
    number1 = number1.value
    number2 = number2.value

    console.log(number1 * number2)
}

function divide() {
    number1 = number1.value
    number2 = number2.value

    console.log(number1 / number2)
}


btnPlus.addEventListener('click', sum)
btnMinus.addEventListener('click', minus)
btnMultiply.addEventListener('click', multiply)
btnDivide.addEventListener('click', divide)



