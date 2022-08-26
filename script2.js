const userChoiceDisplay = document.createElement("h1")
const userScoreDisplay = document.createElement("h3")
const computerChoiceDisplay = document.createElement("h1")
const computerScoreDisplay = document.createElement("h3")
const resultDisplay = document.createElement("h4")
const gameGrid = document.getElementById("game")
gameGrid.append(userChoiceDisplay, userScoreDisplay, computerChoiceDisplay, computerScoreDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice
let userScore = 0
let computerScore = 0

userChoiceDisplay.classList.add('choice')
computerChoiceDisplay.classList.add('choice')
userScoreDisplay.classList.add('scores')
computerScoreDisplay.classList.add('scores')
resultDisplay.classList.add('result')

//tell it what to do when user clicks buttons, call functions
const handleClick = (e) => {
    userChoice = e.target.id
    getResults()
    userChoiceDisplay.innerHTML = "User choice: " + userChoice
    userScoreDisplay.innerHTML = "User score: " + userScore
    computerScoreDisplay.innerHTML = "Computer score: " + computerScore
    generateComputerChoice() 
}

function disableButtons() {
    button.forEach(elem => {
        elem.disabled = true
    })
}

//randomly generates computer choice, passes it through choices array to assign string
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = "Computer choice: " + computerChoice
}

//add the buttons. not sure i understand what is going on here...
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] //can be delete f you want to use e.target.innerHTML in handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResults = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "You win! 1 point"
            userScore += 1
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "You lose! Computer gets 1 point"
            computerScore += 1
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            resultDisplay.innerHTML = "It\'s a tie..."
            break
    }
    if (userScore >= 5) {
        userScoreDisplay.innerHTML = 'User score: 5'
        resultDisplay.innerHTML = "You win! Reload the page to play again!"
        disableButtons()
    }
    if (computerScore >= 5) {
        computerScoreDisplay.innerHTML = 'Computer score: 5'
        resultDisplay.innerHTML = "You lost, game over! Reload the page to play again!" 
        disableButtons()
    }
}
