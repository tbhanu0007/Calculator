let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                let result = evaluateExpression(string);
                input.value = result;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == '^') {
            string += "**";
            input.value = string;
        } else if (e.target.innerHTML == '%') {
            string += " % ";
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
function evaluateExpression(expression) {
    expression = expression.replace(/%/g, "/100");
    return Function(`'use strict'; return (${expression})`)();
}
