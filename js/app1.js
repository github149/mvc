import "../css/app1"
import $ from "jquery"
let output = $('#output')
let add = $('#add')
let subtract = $('#subtract')
let multiply = $('#multiply')
let divide = $('#divide')

let n = parseInt(localStorage.getItem('n', n)) || parseInt(output.text())
output.text(n)

add.click(function() {
    n += 1
    output.text(n)
    localStorage.setItem('n', n)
})
subtract.on('click', () => {
    n -= 1
    output.text(n)
    localStorage.setItem('n', n)
})
multiply.on('click', () => {
    n *= 2
    output.text(n)
    localStorage.setItem('n', n)
})
divide.on('click', () => {
    n /= 2
    output.text(n)
    localStorage.setItem('n', n)
})