const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
//**below button can have a class added to make styling easier later
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
//**above variables are saved globally, i think? so they can be accessed where ever



//**make something happen when clcking possChoices (buttons). 
//**'e' is event...? whatever is clicked is target id and is saved as userChoice. 
//**user choice and the display are now linked and innerHTML allows userChoiceDisplay to be manipulated
//essentially whenever we click, all these things happen

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice ()
    getResult()
}))

//i think below function can be easier and more readable as:
//const getComputerChoice = () => {
   // let choices = ['rock', 'paper', 'scissors'];
   // return choices[Math.floor(Math.random() * choices.length)];}
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    
    if (randomNumber === 0) {
    computerChoice = 'Rock'
    }
    if (randomNumber === 1) {
    computerChoice = 'Paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It\'s a tie!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = "Good job! You win a point!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = "Oh no! You lost a point!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = "Good job! You win a point!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = "Oh no! You lost a point!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = "Good job! You win a point!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = "Oh no! You lost a point!"
    }
    resultDisplay.innerHTML = result
}
