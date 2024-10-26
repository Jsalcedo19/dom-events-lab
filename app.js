/*
1: As a user, I want to be able to select numbers so that I can perform operations with them.

2: As a user, I want to be able to add two numbers together.

3: As a user, I want to be able to subtract one number from another.

4: As a user, I want to be able to multiply two numbers together.

5: As a user, I want to be able to divide one number by another.

6: As a user, I want to be able to see the output of the mathematical operation.

7: As a user, I want to be able to clear all operations and start from 0.



AAU i see 0 on my dsiplay
 I should be able to click on the numbers and see them in th display 
 I should be able to apply operators to my calculator
 I should be able to input another numerical value
 I should be 
*/


/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let output = "";
let operator = "";



/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const buttonNumber = document.querySelectorAll('.number'); 
const buttonOperator = document.querySelectorAll('.operator');
const buttonEquals = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
/*-------------------------------- Functions --------------------------------*/
// Clear all values when the clear or "C" button is clicked
const clearClick = () => {
    display.innerText = '';
    num1 = '';
    num2 = '';
    operator = '';
    output = '';
};

// When a number button is clicked
const numClick = (event) => {
    // Clear output if we are starting a new calculation
    if (output) {
        clearClick();
    }

    // Update either num1 or num2 based on if operator has been selected
    if (num1 && operator) {
        display.innerText += event.target.innerText;
        num2 = display.innerText;
    } else {
        display.innerText += event.target.innerText;
        num1 = display.innerText;
    }
};

// When an operator button is clicked
const operatorClick = (event) => {
    // Store the operator and reset display for the next number
    operator = event.target.innerText;
    display.innerText = '';
};

// When equals button is clicked
const equalClick = () => {
    // Convert strings to numbers for calculation
    const firstNum = parseFloat(num1);
    const secondNum = parseFloat(num2);

    // Perform the calculation based on operator
    switch (operator) {
        case '+':
            output = firstNum + secondNum;
            break;
        case '-':
            output = firstNum - secondNum;
            break;
        case '*':
            output = firstNum * secondNum;
            break;
        case '/':
            output = secondNum !== 0 ? firstNum / secondNum : "Error";
            break;
    }

    // Display the result and reset variables for the next calculation
    display.innerText = output;
    num1 = output;
    num2 = '';
    operator = '';
};

/*----------------------------- Event Listeners -----------------------------*/
buttonNumber.forEach((button) => {
    button.addEventListener("click",numClick)
});
clearButton.addEventListener('click', clearClick)

buttonEquals.addEventListener('click', equalClick)

buttonOperator.forEach((button) => {
  button.addEventListener("click", operatorClick);
});



